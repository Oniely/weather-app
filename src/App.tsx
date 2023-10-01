import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SearchPlaces } from "./components/SearchPlaces";
import { Weather } from "./components/Weather";
import { Forecast } from "./components/Forecast";
import axios from "axios";

export interface WeatherDataProps {
    icon: string;
    date: string;
    time: string;

    city: string;

    temp: number;
    feelsLike: number;
    mainDesc: string;
    weatherDescription: string;

    windSpeed: number;
    humidity: number;
    pressure: number;
}

export interface ForecastDaysProp {
    icon: string;
    mainDesc: string;
    description: string;
    date: string;

    humidity: number;
    min_temp: number;
    curr_temp: number;
    max_temp: number;
}

// to clean the code we can try to put the day forecast in an array of object
export interface ForecastDataProps {
    day1: ForecastDaysProp;
    day2: ForecastDaysProp;
    day3: ForecastDaysProp;
    day4: ForecastDaysProp;
    day5: ForecastDaysProp;
}

export interface ChartDataProps {
    time: string[];
    temp: number[];
}

const API_KEY: string = "a0708cd146029da8679dfa66033438a1";
const TIME_API_KEY: string = "6I39QXGUAMVL";

function formatTime(timeString: string) {
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
}

function getDayOfWeek(dateString: string) {
    const dateParts = dateString.split(" ");
    const currentDate = dateParts[0];

    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const date = new Date(currentDate);
    const dayOfWeekIndex = date.getDay();
    return daysOfWeek[dayOfWeekIndex];
}

const App: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(
        null
    );
    const [forecastData, setForecastData] = useState<ForecastDataProps | null>(
        null
    );
    const [chartData, setChartData] = useState<ChartDataProps>({
        time: [],
        temp: []
    });

    const [lat, setLat] = useState("14.6042");
    const [lon, setLon] = useState("120.9822");
    const [city, setCity] = useState("Manila, PH");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleChange(searchData: any) {
        const [latitude, longitude] = searchData.value.split(" ");
        const cityName = searchData.label;

        setLat(latitude);
        setLon(longitude);
        setCity(cityName);
    }

    useEffect(() => {
        fetchData(lat, lon, city);
    }, [lat, lon, city]);

    const fetchData = async (lat: string, lon: string, city: string) => {
        try {

            // Weather Data
            const weatherResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            );
            const data = weatherResponse.data;

            // Time Data
            const timeResponse = await axios.get(
                `https://api.timezonedb.com/v2.1/get-time-zone?key=${TIME_API_KEY}&format=json&by=position&lat=${lat}&lng=${lon}`
            );
            const timeData = timeResponse.data.formatted;
            console.log(timeData)
            const dateTime = new Date(timeData);
            const date = dateTime.toLocaleDateString();
            const time = dateTime.toLocaleTimeString();
            const timeWithSeconds = time;
            const currentDate = date;
            const currentTime = timeWithSeconds.replace(/:\d{2} /, " ");

            const dataSet = {
                icon: data.weather[0].icon,
                date: currentDate,
                time: currentTime,

                city: city,

                temp: Math.ceil(data.main.temp),
                feelsLike: Math.round(data.main.feels_like),
                mainDesc: data.weather[0].main,
                weatherDescription: data.weather[0].description,

                windSpeed: data.wind.speed,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
            };
            setWeatherData(dataSet);

            // Forecast Data
            const forecastResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            );
            const fData = forecastResponse.data;
            console.log(fData);

            const forecastDays = [];
            for (let i = 7; i <= 39; i += 8) {
                const day = fData.list[i];
                forecastDays.push({
                    icon: day.weather[0].icon,
                    mainDesc: day.weather[0].main,
                    description: day.weather[0].description,
                    date: getDayOfWeek(day.dt_txt),
                    humidity: day.main.humidity,
                    min_temp: Math.floor(day.main.temp_min),
                    curr_temp: Math.round(day.main.temp),
                    max_temp: Math.ceil(day.main.temp_max) + 1,
                });
            }
            const [forecast1, forecast2, forecast3, forecast4, forecast5] =
                forecastDays;

            const tempForecastState: ForecastDataProps = {
                day1: forecast1,
                day2: forecast2,
                day3: forecast3,
                day4: forecast4,
                day5: forecast5,
            };
            setForecastData(tempForecastState);

            // Chart Data
            const timeArray = [];
            const tempArray = [];

            for (let i=0; i<40; i++) {
                const datas = fData.list[i];
                const day = getDayOfWeek(datas.dt_txt);
                const currentDay = getDayOfWeek(timeData);

                if (currentDay === day) {
                    const dt = datas.dt_txt;
                    const time = dt.split(' ')[1];
                    const timeData = formatTime(time);
                    const tempData = Math.round(datas.main.temp);

                    timeArray.push(timeData);
                    tempArray.push(tempData);
                }
            }
            setChartData({time: timeArray, temp: tempArray});
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <Container className="h-screen w-full mx-auto px-2 py-2 md:px-4 md:py-4 relative">
            <Row className="flex flex-col-reverse md:flex-row md:h-full h-fit w-full rounded-3xl bg-[#f5f5f5]">
                <Col className="w-full px-4">
                    <SearchPlaces onSearchChange={handleChange} />
                    <Forecast data={forecastData} chartData={chartData} />
                </Col>

                <Col className="w-[100%] md:w-[42rem] h-full bg-[#1a1a52] md:rounded-e-3xl md:rounded-s-none rounded-ss-3xl rounded-se-3xl text-white">
                    <Weather data={weatherData} />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
