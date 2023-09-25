import { ForecastDataProps } from "../App";
import humidityIcon from "./img/water.png";
import ReactApexChart from "react-apexcharts";

interface ForecastProps {
    data: ForecastDataProps | null;
}

export const Forecast: React.FC<ForecastProps> = ({ data }) => {
    const chartData = {
        options: {
            chart: {
                id: "line",
            },
            xaxis: {
                categories: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
            },
        },
        series: [
            {
                name: "Temperature",
                data: [25, 26, 27, 28, 29],
            },
        ],
    };

    return (
        <>
            <div className="w-full px-4 md:px-12 pt-7 flex flex-col items-start justify-start gap-5 mb-6 md:mb-2">
                {data?.day1 &&
                    data?.day2 &&
                    data?.day3 &&
                    data?.day4 &&
                    data?.day5 && (
                        <div className="w-full flex items-center justify-between px-5 md:pr-14 gap-3">
                            <h1 className="font-semibold text-[0.8rem] md:text-[16px]">
                                Week
                            </h1>

                            <h1 className="font-semibold text-[0.8rem] md:text-[16px]">
                                Humidity
                            </h1>

                            <h1 className="font-semibold text-[0.8rem] md:text-[16px]">
                                Weather
                            </h1>

                            <h1 className="font-semibold relative text-[0.8rem] md:text-[16px]">
                                Temperature
                                <span className="font-sans text-xs align-text-top absolute top-[-8px]">
                                    &#8451;
                                </span>
                            </h1>
                        </div>
                    )}

                <div className="grid grid-cols-5 w-full gap-2 md:gap-0">
                    <div className="text-[0.8rem] md:text-lg flex flex-col gap-[6px]  justify-between items-start font-medium shrink-0">
                        <p>{data?.day1.date}</p>
                        <p>{data?.day2.date}</p>
                        <p>{data?.day3.date}</p>
                        <p>{data?.day4.date}</p>
                        <p>{data?.day5.date}</p>
                    </div>

                    {data?.day1.humidity &&
                    data?.day2.humidity &&
                    data?.day3.humidity &&
                    data?.day4.humidity &&
                    data?.day5.humidity ? (
                        <div className="text-[0.85rem] md:text-lg flex flex-col gap-[6px] justify-between items-start">
                            <div className="flex gap-1 items-center">
                                <img
                                    src={humidityIcon}
                                    alt="wicon"
                                    className="h-4 md:h-5 object-contain"
                                />
                                <span className="text-gray-500 shrink-0">{`${data.day1.humidity} %`}</span>
                            </div>
                            <div className="flex gap-1 items-center">
                                <img
                                    src={humidityIcon}
                                    alt="wicon"
                                    className="h-4 md:h-5 object-contain"
                                />
                                <span className="text-gray-500 shrink-0">{`${data.day2.humidity} %`}</span>
                            </div>
                            <div className="flex gap-1 items-center">
                                <img
                                    src={humidityIcon}
                                    alt="wicon"
                                    className="h-4 md:h-5 object-contain"
                                />
                                <span className="text-gray-500 shrink-0">{`${data.day3.humidity} %`}</span>
                            </div>
                            <div className="flex gap-1 items-center">
                                <img
                                    src={humidityIcon}
                                    alt="wicon"
                                    className="h-4 md:h-5 object-contain"
                                />
                                <span className="text-gray-500 shrink-0">{`${data.day4.humidity} %`}</span>
                            </div>
                            <div className="flex gap-1 items-center">
                                <img
                                    src={humidityIcon}
                                    alt="wicon"
                                    className="h-4 md:h-5 object-contain"
                                />
                                <span className="text-gray-500 shrink-0">{`${data.day5.humidity} %`}</span>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    {data?.day1.icon &&
                    data?.day2.icon &&
                    data?.day3.icon &&
                    data?.day4.icon &&
                    data?.day5.icon ? (
                        <div className="text-[0.85rem] md:text-lg flex flex-col gap-[6px] justify-between items-start">
                            <div className="flex items-center gap-1">
                                <img
                                    src={`http://openweathermap.org/img/w/${data.day1.icon}.png`}
                                    alt="wicon"
                                    className="h-7 lg:h-10 lg:w-10 object-contain shadow-inner rounded-full"
                                    title={data.day1.description}
                                />
                                <span className="text-[0.85rem] md:text-lg">
                                    <span className="hidden md:inline">- </span>
                                    {`${data.day1.mainDesc}`}
                                </span>
                            </div>

                            <div className="flex items-center gap-1">
                                <img
                                    src={`http://openweathermap.org/img/w/${data.day2.icon}.png`}
                                    alt="wicon"
                                    className="h-7 lg:h-10 lg:w-10 object-contain shadow-inner rounded-full"
                                    title={data.day2.description}
                                />
                                <span className="text-[0.85rem] md:text-lg">
                                    <span className="hidden md:inline">- </span>
                                    {`${data.day2.mainDesc}`}
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src={`http://openweathermap.org/img/w/${data.day3.icon}.png`}
                                    alt="wicon"
                                    className="h-7 lg:h-10 lg:w-10 object-contain shadow-inner rounded-full"
                                    title={data.day3.description}
                                />
                                <span className="text-[0.85rem] md:text-lg">
                                    <span className="hidden md:inline">- </span>
                                    {`${data.day3.mainDesc}`}
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src={`http://openweathermap.org/img/w/${data.day4.icon}.png`}
                                    alt="wicon"
                                    className="h-7 lg:h-10 lg:w-10 object-contain shadow-inner rounded-full"
                                    title={data.day4.description}
                                />
                                <span className="text-[0.85rem] md:text-lg">
                                    <span className="hidden md:inline">- </span>
                                    {`${data.day4.mainDesc}`}
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src={`http://openweathermap.org/img/w/${data.day5.icon}.png`}
                                    alt="wicon"
                                    className="h-7 lg:h-10 lg:w-10 object-contain shadow-inner rounded-full"
                                    title={data.day5.description}
                                />
                                <span className="text-[0.85rem] md:text-lg">
                                    <span className="hidden md:inline">- </span>
                                    {`${data.day5.mainDesc}`}
                                </span>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    {data?.day1 &&
                        data?.day2 &&
                        data?.day3 &&
                        data?.day4 &&
                        data?.day5 && (
                            <div className="text-[0.85rem] md:text-lg flex flex-col gap-[6px] justify-between items-center col-span-2">
                                <div className="flex items-center w-full justify-center px-3">
                                    <div className="flex items-center gap-3">
                                        <div className="relative m-2 text-[#b7bfc0]">
                                            {data.day1.min_temp}
                                            <span className="font-sans text-xs align-text-top absolute top-[-2px]">
                                                &#8451;
                                            </span>
                                        </div>
                                        <div
                                            className="bg-blue-400 h-4 w-[4rem] sm:w-[7rem] md:w-[150px] relative rounded-full shadow-sm"
                                            title={data.day1.curr_temp.toString()}
                                        >
                                            <span
                                                className="absolute top-0 left-0 bg-red-400 z-10 rounded-full h-4"
                                                style={{
                                                    width: `${
                                                        ((data.day1.curr_temp -
                                                            data.day1
                                                                .min_temp) /
                                                            (data.day1
                                                                .max_temp -
                                                                data.day1
                                                                    .min_temp)) *
                                                        100
                                                    }%`,
                                                }}
                                                title={
                                                    data.day1.curr_temp.toString() +
                                                    "°"
                                                }
                                            >
                                                &nbsp;
                                            </span>
                                        </div>
                                        <div className="text-gray-800 relative">
                                            {data.day1.max_temp}
                                            <span className="font-sans text-xs align-text-top absolute top-[-2px]">
                                                &#8451;
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-center px-3">
                                    <div className="flex items-center gap-3">
                                        <div className="relative m-2 text-[#b7bfc0]">
                                            {data.day2.min_temp}
                                            <span className="font-sans text-xs align-text-top absolute top-[-2px]">
                                                &#8451;
                                            </span>
                                        </div>
                                        <div
                                            className="bg-blue-400 h-4 w-[4rem] sm:w-[7rem] md:w-[150px] relative rounded-full shadow-sm"
                                            title={
                                                data.day2.curr_temp.toString() +
                                                "°"
                                            }
                                        >
                                            <span
                                                className="absolute top-0 left-0 bg-red-400 z-10 rounded-full h-4"
                                                style={{
                                                    width: `${
                                                        ((data.day2.curr_temp -
                                                            data.day2
                                                                .min_temp) /
                                                            (data.day2
                                                                .max_temp -
                                                                data.day2
                                                                    .min_temp)) *
                                                        100
                                                    }%`,
                                                }}
                                                title={
                                                    data.day2.curr_temp.toString() +
                                                    "°"
                                                }
                                            >
                                                &nbsp;
                                            </span>
                                        </div>
                                        <div className="text-gray-800 relative">
                                            {data.day2.max_temp}
                                            <span className="font-sans text-xs align-text-top absolute top-[-2px]">
                                                &#8451;
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-center px-3">
                                    <div className="flex items-center gap-3">
                                        <div className="relative m-2 text-[#b7bfc0]">
                                            {data.day3.min_temp}
                                            <span className="font-sans text-xs align-text-top absolute top-[-2px]">
                                                &#8451;
                                            </span>
                                        </div>
                                        <div
                                            className="bg-blue-400 h-4 w-[4rem] sm:w-[7rem] md:w-[150px] relative rounded-full shadow-sm"
                                            title={
                                                data.day3.curr_temp.toString() +
                                                "°"
                                            }
                                        >
                                            <span
                                                className="absolute top-0 left-0 bg-red-400 z-10 rounded-full h-4"
                                                style={{
                                                    width: `${
                                                        ((data.day3.curr_temp -
                                                            data.day3
                                                                .min_temp) /
                                                            (data.day3
                                                                .max_temp -
                                                                data.day3
                                                                    .min_temp)) *
                                                        100
                                                    }%`,
                                                }}
                                                title={
                                                    data.day3.curr_temp.toString() +
                                                    "°"
                                                }
                                            >
                                                &nbsp;
                                            </span>
                                        </div>
                                        <div className="text-gray-800 relative">
                                            {data.day3.max_temp}
                                            <span className="font-sans text-xs align-text-top absolute top-[-2px]">
                                                &#8451;
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-center px-3">
                                    <div className="flex items-center gap-3">
                                        <div className="relative m-2 text-[#b7bfc0]">
                                            {data.day4.min_temp}
                                            <span className="font-sans text-xs align-text-top absolute top-[-2px]">
                                                &#8451;
                                            </span>
                                        </div>
                                        <div
                                            className="bg-blue-400 h-4 w-[4rem] sm:w-[7rem] md:w-[150px] relative rounded-full shadow-sm"
                                            title={
                                                data.day4.curr_temp.toString() +
                                                "°"
                                            }
                                        >
                                            <span
                                                className="absolute top-0 left-0 bg-red-400 z-10 rounded-full h-4"
                                                style={{
                                                    width: `${
                                                        ((data.day4.curr_temp -
                                                            data.day4
                                                                .min_temp) /
                                                            (data.day4
                                                                .max_temp -
                                                                data.day4
                                                                    .min_temp)) *
                                                        100
                                                    }%`,
                                                }}
                                                title={
                                                    data.day4.curr_temp.toString() +
                                                    "°"
                                                }
                                            >
                                                &nbsp;
                                            </span>
                                        </div>
                                        <div className="text-gray-800 relative">
                                            {data.day4.max_temp}
                                            <span className="font-sans text-xs align-text-top absolute top-[-2px]">
                                                &#8451;
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-center px-3">
                                    <div className="flex items-center gap-3">
                                        <div className="relative m-2 text-[#b7bfc0]">
                                            {data.day5.min_temp}
                                            <span className="font-sans text-xs align-text-top absolute top-[-2px]">
                                                &#8451;
                                            </span>
                                        </div>
                                        <div
                                            className="bg-blue-400 h-4 w-[4rem] sm:w-[7rem] md:w-[150px] relative rounded-full shadow-sm"
                                            title={
                                                data.day5.curr_temp.toString() +
                                                "°"
                                            }
                                        >
                                            <span
                                                className="absolute top-0 left-0 bg-red-400 z-10 rounded-full h-4"
                                                style={{
                                                    width: `${
                                                        ((data.day5.curr_temp -
                                                            data.day5
                                                                .min_temp) /
                                                            (data.day5
                                                                .max_temp -
                                                                data.day5
                                                                    .min_temp)) *
                                                        100
                                                    }%`,
                                                }}
                                                title={
                                                    data.day5.curr_temp.toString() +
                                                    "°"
                                                }
                                            >
                                                &nbsp;
                                            </span>
                                        </div>
                                        <div className="text-gray-800 relative">
                                            {data.day5.max_temp}
                                            <span className="font-sans text-xs align-text-top absolute top-[-2px]">
                                                &#8451;
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
            <div className="w-full px-4 md:px-12 text-lg hidden md:block">
                <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={200} width={700} />
            </div>
        </>
    );
};
