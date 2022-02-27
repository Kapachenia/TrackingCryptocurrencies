import React from "react";
import {Paginator} from "./Paginator/Paginator";
import {ItemsList} from "./ItemsList/ItemsList";
import s from "./Basic.module.scss"

export const Basic = () => {
    return (
        <div>
            <div>
                <ItemsList/>
            </div>
            <div className={s.wrapper}>
                <Paginator/>
            </div>
        </div>
    )
}