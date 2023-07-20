import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./BarChartBox.scss";
import React from "react";

export default function BarChartBox({ title, color, infoBoxColor, data, showVal }) {
    return (
        <div className="BarChartBox">
            <h2>{title}</h2>
            <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <BarChart data={data}>
                        <Tooltip contentStyle={{ background: infoBoxColor, color: "black", borderRadius: "5px", fontWeight: "600" }} cursor={{ fill: "none" }} labelStyle={{ display: "none" }} />
                        <Bar dataKey={showVal} fill={color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
