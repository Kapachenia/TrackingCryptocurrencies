import {Item} from "./Item/Item";
import React from "react";
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../../../bll/store";
import {ItemsType} from "../../../../api/api";
// import "../../../../styles/styles.scss"

export const ItemsList = () => {

    const itemCurrency = useSelector<AppRootStoreType, Array<ItemsType>>(state => state.setReducer.data)
    const pageSize = useSelector<AppRootStoreType, number>(state => state.setReducer.pageSize)

    return (
        <table className={''}>
            <thead>
            <tr className={''}>
                <th className={''}>#</th>
                <th className={''}>Обозначение</th>
                <th className={''}>Наименование</th>
                <th className={''}>Стоимость</th>
                <th className={''}>Доступно</th>
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