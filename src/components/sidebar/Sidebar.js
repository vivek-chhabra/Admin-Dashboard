import calender from "../../assets/calendar.svg";
import settings from "../../assets/settings.svg";
import product from "../../assets/product.svg";
import backup from "../../assets/backup.svg";
import { NavLink } from "react-router-dom";
import order from "../../assets/order.svg";
import chart from "../../assets/chart.svg";
import users from "../../assets/user.svg";
import home from "../../assets/home.svg";
// import post from "../../assets/post.svg";
import note from "../../assets/note.svg";
// import form from "../../assets/form.svg";
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
                            Homepage
                        </NavLink>
                        <NavLink to={"/"}>
                            <img src={users} alt="" />
                            Profile
                        </NavLink>
                    </div>
                </div>
                <div className="item lists flex-column">
                    <span>LISTS</span>
                    <div className="links flex-column">
                        <NavLink to={"/"}>
                            <img src={users} alt="" />
                            Users
                        </NavLink>
                        <NavLink to={"/"}>
                            <img src={product} alt="" />
                            Products
                        </NavLink>
                        <NavLink to={"/"}>
                            <img src={order} alt="" />
                            Orders
                        </NavLink>
                        <NavLink to={"/"}>
                            <i class="fa-regular fa-newspaper"></i>
                            Posts
                        </NavLink>
                    </div>
                </div>
                <div className="item general flex-column">
                    <span>GENERAL</span>
                    <div className="links flex-column">
                        <NavLink to={"/"}>
                            <img src={app} alt="" />
                            Elements
                        </NavLink>
                        <NavLink to={"/"}>
                            <img src={note} alt="" />
                            Notes
                        </NavLink>
                        <NavLink to={"/"}>
                            <i class="fa-solid fa-file-lines"></i>
                            Forms
                        </NavLink>
                        <NavLink to={"/"}>
                            <img src={calender} alt="" />
                            Calender
                        </NavLink>
                    </div>
                </div>
                <div className="item maintenance flex-column">
                    <span>MAINTENANCE</span>
                    <div className="links flex-column">
                        <NavLink to={"/"}>
                            <img src={settings} alt="" />
                            Settings
                        </NavLink>
                        <NavLink to={"/"}>
                            <img src={backup} alt="" />
                            Backups
                        </NavLink>
                    </div>
                </div>
                <div className="item analytics flex-column">
                    <span>ANALYTICS</span>
                    <div className="links flex-column">
                        <NavLink to={"/"}>
                            <img src={chart} alt="" />
                            Charts
                        </NavLink>
                        <NavLink to={"/"}>
                            <img src={log} alt="" />
                            Logs
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}