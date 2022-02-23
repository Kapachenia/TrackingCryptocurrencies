import React from "react";
import {setCurrencyTC} from "../../../../bll/setReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStoreType} from "../../../../bll/store";
import s from "./Pagination.module.scss";

export const Pagination = () => {

    const pageSize = useSelector<AppRootStoreType, number>(state => state.setReducer.pageSize)
    const totalPage = useSelector<AppRootStoreType, number>(state => state.setReducer.totalPage)

    const dispatch = useDispatch()

    // const setCoins = () => {
    //     dispatch(setCurrencyTC(0))
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
            {pages.map((p, index) => {
                return <span className={s.pointer} key={index} onClick={() => setPagination(p)}>{p}</span>
            })}
        </div>
    )
}