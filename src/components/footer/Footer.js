import React from "react";
import "./Footer.scss";
// import copyright from "../../assets/";

export default function Footer() {
    return (
        <div className="Footer space-between">
            <p className="left">InfoPulse</p>
            <div className="copyright">
                <i class="fa-regular fa-copyright"></i>
                Admin Dashboard
            </div>
        </div>
    );
}
