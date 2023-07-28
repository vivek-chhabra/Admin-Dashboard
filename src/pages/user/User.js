import SinglePage from "../../components/singlePage/SinglePage";
import { useParams } from "react-router-dom";
import { singleUser } from "../../data";
import React from "react";
import "./User.scss";


export default function User() {
    const { img, title, info, chart, activities } = singleUser;
    const { id } = useParams();

    return (
        <div className="User">
            <SinglePage img={img} info={info} chart={chart} activities={activities} title={title} />
        </div>
    );
}
