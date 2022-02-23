import React from "react";
import s from "./BriefcaseItem.module.css"

type BriefcaseItemType = {
    name: string
    count: string
}

export const BriefcaseItem = (props: BriefcaseItemType) => {
    return (
        <div className={s.wrapper}>
            <div>
                {props.name}
            </div>
            <div>
                {props.count}
            </div>
            <div>
                <button>x</button>
            </div>
        </div>
    )
}