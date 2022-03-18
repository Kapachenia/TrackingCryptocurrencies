import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStoreType} from "../../../../bll/store";
import {setCurrencyTC, setCurrentPage} from "../../../../bll/setReducer";
import s from "../Paginator/Paginator.module.scss"

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
        <div className={s.paginator}>
            <div className={s.paginator__prev_inner}>
                {
                    currentPage > 1 &&
                    <button onClick={selectPrevPage}>prev</button>
                }
            </div>
            <div className={''}>
                {toArray().map((p, index) => {
                    return <span
                        className={`${s.paginator__page} ${currentPage === p ? s.selected : ''}`}
                        key={index}
                        onClick={() => selectPage(p)}>{p}</span>
                })}
            </div>
            <div className={s.paginator__next}>
                {
                    currentPage < 10 &&
                    <button className={''} onClick={selectNextPage}>next</button>
                }
            </div>
        </div>
    )
}
