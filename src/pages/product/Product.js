import SinglePage from "../../components/singlePage/SinglePage";
import { singleProduct } from "../../data";
import React from "react";
import "./Product.scss";

export default function Product() {
  const { img, title, info, chart, activities } = singleProduct;
    return (
        <div className="Product">
            <SinglePage img={img} info={info} chart={chart} activities={activities} title={title} />
        </div>
    );
}
