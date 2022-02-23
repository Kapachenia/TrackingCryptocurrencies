import React from "react";
import s from "./BriefcaseItem.module.scss"
import {useDispatch} from "react-redux";
import {deleteCurrency} from "../../../../bll/briefcaseReducer";

type BriefcaseItemType = {
    id: string
    name: string
    count: string
}

export const BriefcaseItem = (props: BriefcaseItemType) => {

    const dispatch = useDispatch()

    return (
        <div className={s.wrapper}>
            <div>
                {props.name}
            </div>
            <div>
                {props.count}
            </div>
            <div>
                <button onClick={() => dispatch(deleteCurrency(props.id))}>x</button>
            </div>
        </div>
    )
}