import {Item} from "./Item/Item";
import React from "react";
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../../../bll/store";
import {ItemsType} from "../../../../api/api";
import s from "../ItemsList/ItemsList.module.scss";

export const ItemsList = () => {

    const itemCurrency = useSelector<AppRootStoreType, Array<ItemsType>>(state => state.setReducer.data)
    const pageSize = useSelector<AppRootStoreType, number>(state => state.setReducer.pageSize)

    return (
        <table className={s.table}>
            <thead>
            <tr className={s.table__names}>
                <th className={s.table__name}>#</th>
                <th className={s.table__name}>Обозначение</th>
                <th className={s.table__name}>Наименование</th>
                <th className={s.table__name}>Стоимость</th>
                <th className={s.table__name}>Доступно</th>
            </tr>
            </thead>
            {itemCurrency.slice(0, pageSize).map(m => (<Item
                id={m.id}
                key={m.id}
                symbol={m.symbol}
                rank={m.rank}
                name={m.name}
                supply={m.supply}
                price={m.priceUsd}
            />))}
        </table>
    )
}