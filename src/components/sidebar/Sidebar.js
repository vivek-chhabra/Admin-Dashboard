import calender from "../../assets/calendar.svg";
import settings from "../../assets/settings.svg";
import product from "../../assets/product.svg";
import backup from "../../assets/backup.svg";
import { NavLink } from "react-router-dom";
import order from "../../assets/order.svg";
import chart from "../../assets/chart.svg";
import users from "../../assets/user.svg";
import home from "../../assets/home.svg";
import note from "../../assets/note.svg";
import app from "../../assets/app.svg";
import log from "../../assets/log.svg";
import React from "react";
import "./Sidebar.scss";

export default function Sidebar() {
    return (
        <div className="Sidebar flex-column">
            <div className="items flex-column">
                <div className="item main flex-column">
                    <span>MAIN</span>
                    <div className="links flex-column">
                        <NavLink to={"/"}>
                            <img src={home} alt="" />
                            <span>Homepage</span>
                        </NavLink>
                        <NavLink to={"/profile"}>
                            <img src={users} alt="" />
                            <span>Profile</span>
                        </NavLink>
                    </div>
                </div>
                <div className="item lists flex-column">
                    <span>LISTS</span>
                    <div className="links flex-column">
                        <NavLink to={"/users"}>
                            <img src={users} alt="" />
                            <span>Users</span>
                        </NavLink>
                        <NavLink to={"/products"}>
                            <img src={product} alt="" />
                            <span>Products</span>
                        </NavLink>
                        <NavLink to={"/orders"}>
                            <img src={order} alt="" />
                            <span>Orders</span>
                        </NavLink>
                        <NavLink to={"/posts"}>
                            <i class="fa-regular fa-newspaper"></i>
                            <span>Posts</span>
                        </NavLink>
                    </div>
                </div>
                <div className="item general flex-column">
                    <span>GENERAL</span>
                    <div className="links flex-column">
                        <NavLink to={"/elements"}>
                            <img src={app} alt="" />
                            <span>Elements</span>
                        </NavLink>
                        <NavLink to={"/notes"}>
                            <img src={note} alt="" />
                            <span>Notes</span>
                        </NavLink>
                        <NavLink to={"/forms"}>
                            <i class="fa-solid fa-file-lines"></i>
                            <span>Forms</span>
                        </NavLink>
                        <NavLink to={"/calender"}>
                            <img src={calender} alt="" />
                            <span>Calender</span>
                        </NavLink>
                    </div>
                </div>
                <div className="item maintenance flex-column">
                    <span>MAINTENANCE</span>
                    <div className="links flex-column">
                        <NavLink to={"/settings"}>
                            <img src={settings} alt="" />
                            <span>Settings</span>
                        </NavLink>
                        <NavLink to={"/backups"}>
                            <img src={backup} alt="" />
                            <span>Backups</span>
                        </NavLink>
                    </div>
                </div>
                <div className="item analytics flex-column">
                    <span>ANALYTICS</span>
                    <div className="links flex-column">
                        <NavLink to={"/charts"}>
                            <img src={chart} alt="" />
                            <span>Charts</span>
                        </NavLink>
                        <NavLink to={"/logs"}>
                            <img src={log} alt="" />
                            <span>Logs</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
