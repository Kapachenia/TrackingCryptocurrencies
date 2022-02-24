import React from "react";
import {PaginatorTest} from "./PaginatorTest/PaginatorTest";
import {ItemsList} from "./ItemsList/ItemsList";
import s from "./Basic.module.css"

export const Basic = () => {
    return (
        <div>
            <div>
                <ItemsList/>
            </div>
            <div className={s.wrapper}>
                <PaginatorTest/>
            </div>
        </div>
    )
}