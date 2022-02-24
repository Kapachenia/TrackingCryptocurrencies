import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrencyTC, setCurrentPage} from "../../../../bll/setReducer";
import {AppRootStoreType} from "../../../../bll/store";

export const PaginatorTest = () => {

    const dispatch = useDispatch()

    const currentPage = useSelector<AppRootStoreType, number>(state => state.setReducer.currentPage)

    // const [currentPage, setCurrentPage] = useState(0)

    let page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    // useEffect(() => {

    // }, [currentPage])

    const selectPage = (p: any) => {
        // setCurrentPage(p)
        dispatch(setCurrentPage(p))
        dispatch(setCurrencyTC((p - 1) * 10))
        // console.log(p)
        // console.log(currentPage)


    //     dispatch(setCurrentPage(p))
    //     p == 1 ? dispatch(setCurrencyTC(0)) : dispatch(setCurrencyTC(p * 10))
    }

    const SelectPrevPage = () => {
        dispatch(setCurrencyTC(currentPage * 10 - 20))
        dispatch(setCurrentPage(currentPage - 1))
    }

    const SelectNextPage = () => {
        dispatch(setCurrencyTC(currentPage * 10))
        dispatch(setCurrentPage(currentPage + 1))
        // dispatch(setCurrencyTC(currentPage + 9))
        // dispatch(setCurrentPage(currentPage + 10))
    }

    return (
        <div>
            <div>
                {
                    currentPage > 1 &&
                    <button onClick={SelectPrevPage}>prev</button>
                }
            </div>
            <div>
                {page.map((p, index) => {
                    return <span key={index} onClick={() => selectPage(p)}>{p}</span>
                })}
            </div>
            <div>
                {
                    currentPage < 10 &&
                    <button onClick={SelectNextPage}>next</button>
                }
            </div>
        </div>
    )
}
