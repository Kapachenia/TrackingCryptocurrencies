import React from "react";
import {useDispatch} from "react-redux";
import {deleteCurrency, deletePriceInBriefcase, setOldPriceBriefcase} from "../../../../bll/cart";

type BriefcaseItemType = {
    id?: string
    name?: string
    count?: number
    price?: number
    idTransaction?: string
}

export const CartItems = ({
                              id,
                              name,
                              count,
                              price,
                              idTransaction
                          }: BriefcaseItemType) => {

    const dispatch = useDispatch()

    const deleteHandler = () => {
        if (window.confirm('Вы уверены, что хотите удалить?')) {
            dispatch(deleteCurrency(idTransaction))
            dispatch(deletePriceInBriefcase(Number(price)))
            dispatch(setOldPriceBriefcase(0))
        }
    }

    return (
        <div className={''}>
            <div className={''}>
                {name}
            </div>
            <div className={''}>
                {`${count?.toFixed(2)} шт.`}
            </div>
            <div className={''}>
                {`${price?.toFixed(2)} $`}
            </div>
            <div className={''}>
                {id && <button onClick={deleteHandler}>x</button>}
            </div>
        </div>
    )
}