import React from "react";


const Button = ({ title, onpress, type = "primary", message, iconClass = "" }) => {
    // console.log(probs ,"<<<<<< probs")


    if (type === "primary") {
        return (
            <div>

                <button

                 style={{ color: "white", backgroundColor: "blue" }} onClick={onpress} type={type} >{iconClass!=="" && (<i className={iconClass}></i>)} <span>{title}</span></button>
                <p style={{ color: "blue" }}>{message} </p>
            </div>
        )
    }
    if (type === "secondary") {
        return (
            <div>

                <button style={{ color: "white", backgroundColor: "gray" }} onClick={onpress} type={type} > {iconClass!=="" && (<i className={iconClass}></i>)} <span>{title}</span></button>
                <p style={{ color: "gray" }}>{message} </p>
            </div>
        )
    }
    if (type === "danger") {
        return (
            <div>

            <button style={{ color: "white", backgroundColor: "red"}} onClick={onpress} type={type} > {iconClass!=="" && (<i className={iconClass}></i>)} <span>{title}</span></button>
            <p style={{ color: "red" }}>{message} </p>
        </div>
        )
    }
    return (
        <div>

            <button style={{ color: "white", backgroundColor: "black" }} onClick={onpress} type={type} > {title}</button>
            <p>{message} </p>
        </div>
    )

}

export default Button