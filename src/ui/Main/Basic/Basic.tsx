import React from "react";
import {Paginator} from "./Paginator/Paginator";
import {ItemsList} from "./ItemsList/ItemsList";
import "../../../styles/styles.scss"

export const Basic = () => {
    return (
        <div>
            <div>
                <ItemsList/>
            </div>
            <div className={'wrapper-center wrapper-center__block-paginator--inner'}>
                <Paginator/>
            </div>
        </div>
    )
}