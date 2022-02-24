import React, {useState} from "react";
import {setCurrencyTC} from "../../../../bll/setReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStoreType} from "../../../../bll/store";
import s from "./Pagination.module.scss";

export const Pagination = () => {

    const pageSize = useSelector<AppRootStoreType, number>(state => state.setReducer.pageSize)
    const totalPage = useSelector<AppRootStoreType, number>(state => state.setReducer.totalPage)

    //     pageSize: 10,
    //     totalPage: 100,
    //     currentPage: 1,

    const dispatch = useDispatch()

    const setPagination = (p: number) => {
        p == 1 ? dispatch(setCurrencyTC(0)) : dispatch(setCurrencyTC(p * 10))
    }

    let pagesCount = Math.ceil(totalPage / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionSize = 10

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(10)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    const nextHandler = () => {
        setPortionNumber(portionNumber + 10)
        dispatch(setCurrencyTC(portionNumber))
    }

    const prevHandler = () => {
        setPortionNumber(portionNumber - 1)
        // dispatch(setCurrencyTC(portionNumber))
    }

    return (
        <div>
            <div>
                {/*{*/}
                {/*    portionNumber > 1 &&*/}
                    <button onClick={prevHandler}>prev</button>
                {/*}*/}
            </div>
            <div>
                {pages
                    // .filter(f => f >= leftPortionPageNumber && f <= rightPortionPageNumber)
                    .map((p, index) => {
                    return <span className={s.pointer} key={index} onClick={() => setPagination(p)}>{p}</span>
                })}
            </div>
            <div>
                {/*{*/}
                {/*    portionCount  > portionNumber &&*/}
                    <button onClick={nextHandler}>next</button>
                {/*}*/}
            </div>
        </div>
    )
}