import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrencyTC, setCurrentPage} from "../../../../bll/setReducer";
import {AppRootStoreType} from "../../../../bll/store";
import s from "./Paginator.module.scss"

export const Paginator = () => {

    const currentPage = useSelector<AppRootStoreType, number>(state => state.setReducer.currentPage)
    const totalPage = useSelector<AppRootStoreType, number>(state => state.setReducer.totalPage)
    const dispatch = useDispatch()

    const toArray = () => {
        let arr = []
        for (let i = 1; i < totalPage; i++) {
            arr[i] = i
        }
        return arr
    }

    const selectPage = (p: number) => {
        dispatch(setCurrentPage(p))
        dispatch(setCurrencyTC((p - 1) * 10))
    }

    const selectPrevPage = () => {
        dispatch(setCurrencyTC(currentPage * 10 - 20))
        dispatch(setCurrentPage(currentPage - 1))
    }

    const selectNextPage = () => {
        dispatch(setCurrencyTC(currentPage * 10))
        dispatch(setCurrentPage(currentPage + 1))
    }

    return (
        <div className={s.pagination}>
            <div>
                {
                    currentPage > 1 &&
                    <button onClick={selectPrevPage}>prev</button>
                }
            </div>
            <div>
                {toArray().map((p, index) => {
                    return <span className={currentPage === p ? s.page__selected : ''} key={index}
                                 onClick={() => selectPage(p)}>{p}</span>
                })}
            </div>
            <div>
                {
                    currentPage < 10 &&
                    <button onClick={selectNextPage}>next</button>
                }
            </div>
        </div>
    )
}
