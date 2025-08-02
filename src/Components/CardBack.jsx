import React from "react";
import "./Card.css";

export default function CardBack({cvc}) {
    return(
        <div className="card-back">
            <p className="black"></p>
           <div className="grey-area">
            <p className="grey"></p>
             <p className="card-cvc">{cvc || "123"}</p>
          </div> 
           <div className="tiny">
                <p>ghdhhjfhjfhyuhjjh dfgghsaggh shdh fesd</p>
                <p>shh dhhsdghghfghhgghf sajhjhsh sg</p>
                <p>gsg sjhjhsdjh djhhjhdf jjcdjsoauhuejhbbdgh</p>
            </div>
        </div>
    )
}