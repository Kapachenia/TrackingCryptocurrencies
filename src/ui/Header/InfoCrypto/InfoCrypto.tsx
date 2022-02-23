import React from "react";
import s from "./InfoCrypto.module.css";

export const InfoCrypto = () => {
    return (
        <div className={s.wrapper}>
            <span>name</span>
            <span>maxSupply</span>
            <span>priceUsd</span>
        </div>
    )
}