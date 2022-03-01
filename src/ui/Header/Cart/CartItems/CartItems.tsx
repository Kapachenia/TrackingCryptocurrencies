import React from "react";
import {useDispatch} from "react-redux";
import {deleteCurrency, deletePriceInBriefcase, setOldPriceBriefcase} from "../../../../bll/cart";

type BriefcaseItemType = {
    id?: string
    name?: string
    count?: number
    price?: number
}

export const CartItems = ({
                                  id,
                                  name,
                                  count,
                                  price
                              }: BriefcaseItemType) => {

    const dispatch = useDispatch()

    const deleteHandler = () => {
        if (window.confirm('Вы уверены, что хотите удалить?')) {
            dispatch(deleteCurrency(id))
            dispatch(deletePriceInBriefcase(Number(price)))
            dispatch(setOldPriceBriefcase(0))
        }
    }

    return (
        <div className={'wrapper--inner'}>
            <div className={'modal__cell-sizes'}>
                {name}
            </div>
            <div className={'modal__cell-sizes'}>
                {`${count?.toFixed(2)} шт.`}
            </div>
            <div className={'modal__cell-sizes'}>
                {`${price?.toFixed(2)} $`}
            </div>
            <div className={'modal__cell-sizes'}>
                {id && <button onClick={deleteHandler}>x</button>}
            </div>
        </div>
    )
}