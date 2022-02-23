import React from "react";
import {Pagination} from "./Pagination/Pagination";
import {ItemsList} from "./ItemsList/ItemsList";

export const Basic = () => {
    return (
        <div>
            <div>
                <ItemsList />
            </div>
            <Pagination />
        </div>
    )
}