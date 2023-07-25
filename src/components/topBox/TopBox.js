import React from "react";
import "./TopBox.scss";
import profile from "../../assets/pic_vivek.jpg";
import { currencyFormat } from "../../helpers";

export default function TopBox(information) {
    return (
        <div className="TopBox flex-column">
            <h1>Top Deals</h1>
            {information.information.map((info) => (
                <div className="list-items flex-column">
                    <div className="user flex">
                        <div className="img">
                            <img src={info.img} alt="" />
                        </div>
                        <div className="user-info flex-column">
                            <div className="name">{info.username}</div>
                            <div className="email">{info.email}</div>
                        </div>
                        <div className="amt">{currencyFormat(info.amount)}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
