import React from "react";
import {Paginator} from "./Paginator/Paginator";
import {ItemsList} from "./ItemsList/ItemsList";
import s from "../Basic/Basic.module.scss"

export const Basic = () => {
    return (
        <div className={s.content}>
            <div>
                <ItemsList/>
            </div>
            <div className={''}>
                <Paginator/>
            </div>
        </div>
    )
}