import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import { capitalize } from "../../helpers";
import search from "../../assets/search.svg";
import expand from "../../assets/expand.svg";
import settimg from "../../assets/settings.svg";
import app from "../../assets/app.svg";
import notification from "../../assets/notifications.svg";
import profile from "../../assets/pic_vivek.jpg";

export default function Navbar() {
    return (
        <div className="Navbar space-between">
            <div className="left flex">
                <img src={logo} alt="" />
                InfoPulse
            </div>
            <div className="right flex">
                <div className="icons align-center">
                    <img src={search} alt="" />
                    <img src={app} alt="" />
                    <img src={expand} alt="" />
                    <div className="bell">
                        <img src={notification} alt="" />
                        <div className="num">5</div>
                    </div>
                </div>
                <div className="user align-center">
                    <div className="img">
                        <img src={profile} alt="" />
                    </div>
                    <div className="name">{"vivek"}</div>
                </div>
                <div className="settings align-center">
                    <img src={settimg} alt="" />
                </div>
            </div>
        </div>
    );
}
