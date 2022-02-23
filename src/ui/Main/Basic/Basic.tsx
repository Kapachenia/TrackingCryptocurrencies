import React from "react";
import {Pagination} from "./Pagination/Pagination";
import {ItemsList} from "./ItemsList/ItemsList";
import s from "./Basic.module.css"

export const Basic = () => {
    return (
        <div>
            <div>
                <ItemsList/>
            </div>
            <div className={s.wrapper}>
                <Pagination/>
            </div>
        </div>
    )
}