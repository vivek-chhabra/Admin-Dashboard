import { useParams } from "react-router-dom";
import "./User.scss";
import React from "react";
import { singleUser } from "../../data";
import SinglePage from "../../components/singlePage/SinglePage";


export default function User() {
    const { img, title, info, chart, activities } = singleUser;
    const { id } = useParams();

    return (
        <div className="User">
            <SinglePage img={img} info={info} chart={chart} activities={activities} title={title} />
        </div>
    );
}
