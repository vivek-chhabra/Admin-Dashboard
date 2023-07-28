import BarChartBox from "../../components/barchart/BarChartBox";
import Areachart from "../../components/areaChart/Areachart";
import Piechart from "../../components/piechart/Piechart";
import ChartBox from "../../components/chartBox/ChartBox";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBox from "../../components/topBox/TopBox";
import { topDealUsers } from "../../data";
import React from "react";
import "./Home.scss";

const data1 = [
    {
        name: "Page A",
        TotalVisits: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        TotalVisits: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        TotalVisits: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        TotalVisits: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        TotalVisits: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        TotalVisits: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        TotalVisits: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const data2 = [
    {
        name: "Page A",
        ProfitEarned: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        ProfitEarned: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        ProfitEarned: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        ProfitEarned: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        ProfitEarned: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        ProfitEarned: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        ProfitEarned: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const chartBoxOne = [
    { title: "total users", amt: 11.234, percent: 45, color: "#8884d8" },
    { title: "total revenue", amt: 56.854, percent: -15, color: "teal" },
];

const chartBoxTwo = [
    { title: "total products", amt: 238, percent: 21, color: "#b6aa67" },
    { title: "total ratio", amt: 2.6, percent: 12, color: "skyblue" },
];

const barChartBox = [
    { title: "Total Visits", color: "#eb8629", infoBoxColor: "#2a3447", data: data1, showVal: "TotalVisits" },
    { title: "Profit Earned", color: "#6467a1", infoBoxColor: "#c8caff", data: data2, showVal: "ProfitEarned" },
];

function Home() {
    return (
        <div className="Home flex">
            <div className="home-info">
                <div className="box" id="box-1">
                    <TopBox information={topDealUsers} />
                </div>
                {chartBoxOne.map((boxInfo, idx) => {
                    return (
                        <>
                            <div className="box" id={`box-${idx + 2}`}>
                                <ChartBox title={boxInfo.title} amt={boxInfo.amt} percent={boxInfo.percent} color={boxInfo.color} />
                            </div>
                        </>
                    );
                })}
                <div className="box" id="box-4">
                    <Piechart />
                </div>
                {chartBoxTwo.map((boxInfo, idx) => {
                    return (
                        <>
                            <div className="box" id={`box-${idx + 5}`}>
                                <ChartBox title={boxInfo.title} amt={boxInfo.amt} percent={boxInfo.percent} color={boxInfo.color} />
                            </div>
                        </>
                    );
                })}
                <div className="box" id="box-7">
                    <Areachart />
                </div>
                {barChartBox.map((boxInfo, idx) => {
                    return (
                        <>
                            <div className="box" id={`box-${idx + 8}`}>
                                <BarChartBox title={boxInfo.title} color={boxInfo.color} infoBoxColor={boxInfo.infoBoxColor} data={boxInfo.data} showVal={boxInfo.showVal} />
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
