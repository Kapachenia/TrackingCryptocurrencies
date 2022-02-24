import {Item} from "./Item/Item";
import React from "react";
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../../../bll/store";
import {itemType} from "../../../../bll/setReducer";
import s from "./ItemsList.module.scss"

export const ItemsList = () => {

    const itemCurrency = useSelector<AppRootStoreType, Array<itemType>>(state => state.setReducer.data)
    const pageSize = useSelector<AppRootStoreType, number>(state => state.setReducer.pageSize)

    return (
        <table className={s.wrapper}>
            <thead>
            <tr>
                <th>#</th>
                <th>Обозначение</th>
                <th>Наименование</th>
                <th>Предложение</th>
                <th>Доступно</th>
            </tr>
            </thead>
            {itemCurrency.slice(0, pageSize).map(m => (<Item
                id={m.id}
                key={m.id}
                symbol={m.symbol}
                rank={m.rank}
                name={m.name}
                marketCapUsd={m.marketCapUsd}
                supply={m.supply}
            />))}
        </table>
    )
}