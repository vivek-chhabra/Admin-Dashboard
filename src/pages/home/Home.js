import React from "react";
import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBox from "../../components/topBox/TopBox";
import ChartBox from "../../components/chartBox/ChartBox";

const chartBoxOne = [
    { title: "total users", amt: 11.234, percent: 45, color: "#8884d8" },
    { title: "total revenue", amt: 56.854, percent: -15, color: "teal" },
];

const chartBoxTwo = [
    { title: "total products", amt: 238, percent: 21, color: "#b6aa67" },
    { title: "total ratio", amt: 2.6, percent: 12, color: "skyblue" },
];

function Home() {
    return (
        <div className="Home flex">
            <Sidebar />
            <div className="home-info">
                <div className="box" id="box-1">
                    <TopBox />
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
                    box-4
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
                    box-7
                </div>
                <div className="box" id="box-8">
                    box-8
                </div>
                <div className="box" id="box-9">
                    box-9
                </div>
            </div>
        </div>
    );
}

export default Home;
