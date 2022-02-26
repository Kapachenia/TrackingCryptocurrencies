import React from "react";
import s from "./BriefcaseItem.module.scss"
import {useDispatch} from "react-redux";
import {deleteCurrency, deletePriceInBriefcase, setOldPriceBriefcase} from "../../../../bll/setBriefcase";

type BriefcaseItemType = {
    id?: string
    name?: string
    count?: string
    price?: string
}

export const BriefcaseItem = ({
                                  id,
                                  name,
                                  count,
                                  price
                              }: BriefcaseItemType) => {

    const dispatch = useDispatch()

    const deleteHandler = () => {
        dispatch(deleteCurrency(id))
        dispatch(deletePriceInBriefcase(Number(price)))
        dispatch(setOldPriceBriefcase(0))
    }

    return (
        <div className={s.wrapper}>
            <div>
                {name}
            </div>
            <div>
                {count}
            </div>
            <div>
                {id && <button onClick={deleteHandler}>x</button>}
            </div>
        </div>
    )
}