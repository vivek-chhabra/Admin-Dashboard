import { currencyFormat } from "../../helpers";
import React from "react";
import "./TopBox.scss";

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
                            <div className="email">{info.email.slice(0, 13)}...</div>
                        </div>
                        <div className="amt">{currencyFormat(info.amount)}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
