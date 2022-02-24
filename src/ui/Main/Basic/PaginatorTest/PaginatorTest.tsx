import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrencyTC, setCurrentPage} from "../../../../bll/setReducer";
import {AppRootStoreType} from "../../../../bll/store";
import s from "./PaginatorTest.module.scss"

export const PaginatorTest = () => {

    const dispatch = useDispatch()

    const currentPage = useSelector<AppRootStoreType, number>(state => state.setReducer.currentPage)


    let page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const selectPage = (p: any) => {
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
                {page.map((p, index) => {
                    return <span className={currentPage === p ? s.page__selected : ''} key={index} onClick={() => selectPage(p)}>{p}</span>
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
