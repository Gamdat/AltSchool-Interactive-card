import React from "react";
import "./Card.css";

export default function CardFront({data}) {
return (
    <div className="card-front">
        <p className="white"></p>
        <p className="white2"></p>
        <p className="purple"></p>
        <p className="card-number">{data.number || "0000 0000 0000 0000"}</p>
        <p className="card-name">{data.name || "Ajayi Gloria"}</p>
        <p className="card-expiry">
            {data.month || "09"}/{data.year || "26"} </p>
    </div>
)
}