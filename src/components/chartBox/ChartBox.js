import React from "react";
import "./ChartBox.scss";
import { NavLink } from "react-router-dom";
import users from "../../assets/logo.svg";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { randNum } from "../../helpers";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default function ChartBox({ title, amt, percent, color }) {
    return (
        <div className="ChartBox space-between">
            <div className="box-info flex-column">
                <div className="title flex">
                    <img src={users} alt="" />
                    <span>{title}</span>
                </div>
                <h1>{amt}</h1>
                <NavLink to={"/"} style={{color: color}}>View All</NavLink>
            </div>
            <div className="chartInfo flex-column">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={data}>
                            <Tooltip contentStyle={{ background: "transparent", border: "none", fontSize: "12px" }} labelStyle={{ display: "none" }} position={{ x: 40, y: -20 }} />
                            <Line type="monotone" dataKey="pv" stroke={color} strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="text flex-column">
                    <span style={percent < 0 ? { color: "rgb(195, 75, 75)" } : { color: "rgb(75, 195, 121)" }}>{percent}%</span> this month
                </div>
            </div>
        </div>
    );
}
