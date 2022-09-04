import React, { useState } from "react";
import "./Counter.css";




function Counter(props){

    let myCount = props.count1;


    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h1><strong>{myCount[0]}</strong></h1>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h1><strong>{myCount[1]}</strong></h1>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h1><strong>{myCount[2]}</strong></h1>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h1><strong>{myCount[3]}</strong></h1>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h1><strong>{myCount[4]}</strong></h1>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h1><strong>{myCount[5]}</strong></h1>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h1><strong>{myCount[6]}</strong></h1>
                </div>
            </div>
`       </>
    );
}

export default Counter;