import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {itemType, setCurrencyTC} from "../../../bll/setReducer";
import {AppRootStoreType} from "../../../bll/store";
import {Item} from "./Item/Items";

export const Items = () => {


    const itemCurrency = useSelector<AppRootStoreType, Array<itemType>>(state => state.setReducer.data)
    const pageSize = useSelector<AppRootStoreType, number>(state => state.setReducer.pageSize)
    const totalPage = useSelector<AppRootStoreType, number>(state => state.setReducer.totalPage)

    const dispatch = useDispatch()

    const setCoins = () => {
        dispatch(setCurrencyTC(0))
    }

    const setPagination = (p: number) => {
        console.log(p)
        dispatch(setCurrencyTC(p * 10))
    }

    let pagesCount = Math.ceil(totalPage / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <button onClick={setCoins}>Click</button>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Обозначение</th>
                        <th>Наименование</th>
                        <th>Предложение</th>
                        <th>Доступно</th>
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
            </div>
            {pages.map((p, index) => {
                return <span key={index} onClick={() => setPagination(p)}>{p}</span>
            })}
        </div>
    )
}