import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {itemType, setCurrencyTC} from "../../../bll/setReducer";
import {AppRootStoreType} from "../../../bll/store";
import {Item} from "./Item/Items";

export const Items = () => {

    const dispatch = useDispatch()

    const itemCurrency = useSelector<AppRootStoreType, Array<itemType>>(state => state.setReducer.data)
    const pageSize = useSelector<AppRootStoreType, number>(state => state.setReducer.pageSize)
    const totalPage = useSelector<AppRootStoreType, number>(state => state.setReducer.totalPage)
    // const currentPage = useSelector<AppRootStoreType, number>(state => state.setReducer.currentPage)

    // const setHandler = () => {
    //     console.log('click')
    //     dispatch(setCurrencyTC())
    // }

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
            <button>Click</button>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Наименование</th>
                    </tr>
                    </thead>
                    {itemCurrency.map(m => (<Item
                        key={m.id}
                        symbol={m.symbol}
                        rank={m.rank}
                    />))}
                </table>
            </div>
            {pages.map((p, index) => {
                return <span key={index} onClick={() => setPagination(p)}>{p}</span>
            })}
        </div>
    )
}