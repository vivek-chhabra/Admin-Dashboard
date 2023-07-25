import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import React, { PureComponent } from "react";
import "./SinglePage.scss";

export default function SinglePage({ img, info, chart, activities, title }) {
    console.log("in the single", chart);
    return (
        <div className="SinglePage flex">
            <div className="left">
                <div className="head">
                    <div className="img">{img && <img src={img} alt="" />}</div>
                    <div className="left flex-column">
                        <div className="title">{title}</div>
                        <div className="btn btn-primary">Update</div>
                    </div>
                </div>
                <div className="info flex-column">
                    {Object.entries(info).map((key) => (
                        <>
                            <div className="item flex">
                                <div className="name">{key[0]} :</div>
                                <div className="value">{key[1]}</div>
                            </div>
                        </>
                    ))}
                </div>
                <hr />
                <div className="chart">
                    {chart && (
                        <ResponsiveContainer width="99%" height="100%">
                            <LineChart
                                data={chart.data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip contentStyle={{ backgroundColor: "#404B62", fontSize: "14px", fontWeight: "400", borderRadius: "5px" }} />
                                <Legend />
                                {chart.dataKeys.map((key) => (
                                    <Line type='monotone' dataKey={key.name} stroke={key.color} />
                                ))}
                            </LineChart>
                        </ResponsiveContainer>
                    )}
                </div>
            </div>
            <div className="right flex-column">
                <h2>Latest Activity</h2>
                <ul className="flex-column">
                    {activities &&
                        activities.map((info) => (
                            <li>
                                <div>
                                    <p>{info.text}</p>
                                    <div className="time">{info.time}</div>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}
