import {Item} from "./Item/Item";
import React from "react";
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../../../bll/store";
import {itemType} from "../../../../bll/setReducer";

export const ItemsList = () => {

    const itemCurrency = useSelector<AppRootStoreType, Array<itemType>>(state => state.setReducer.data)

    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Обозначение</th>
                <th>Наименование</th>
                <th>Предложение</th>
                <th>Доступно</th>
                <th>Купить</th>
            </tr>
            </thead>
            {itemCurrency.map(m => (<Item
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