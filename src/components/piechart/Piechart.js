import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from "recharts";
import React, { PureComponent } from "react";
import "./Piechart.scss";

const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
];

export default function Piechart() {
    return (
        <div className="Piechart flex-column">
            <h1>Leads by Source</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <PieChart>
                        <Tooltip contentStyle={{ borderRadius: "5px", backgroundColor: "#899cc5", fontWeight: '800' }} />
                        <Pie data={data} innerRadius={"70%"} outerRadius={"87%"} fill="#8884d8" paddingAngle={5} dataKey="value">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {data.map((info, idx) => (
                    <>
                        <div className="option flex-column" id={`op-${idx + 1}`}>
                            <div className="text">
                                <div className="dot" style={{backgroundColor: `${info.color}`}}></div>
                                <p>{info.name}</p>
                            </div>
                            <div className="value">{info.value}</div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}
