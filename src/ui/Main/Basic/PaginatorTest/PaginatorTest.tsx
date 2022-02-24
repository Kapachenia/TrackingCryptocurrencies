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

    const selectPage = (p: number) => {
        dispatch(setCurrentPage(p))
        p == 1 ? dispatch(setCurrencyTC(0)) : dispatch(setCurrencyTC(p * 10))

        console.log(`currentPage: ${currentPage}`)
        console.log(`p: ${p}`)

    }

    const SelectPrevPage = (p: number) => {
        // setCurrentPage(p)
        // currentPage == 1 ? dispatch(setCurrencyTC(0)) : dispatch(setCurrencyTC(currentPage * 10))
    }

    const SelectNextPage = () => {
        // dispatch(setCurrentPage(p))
        dispatch(setCurrencyTC(currentPage + 1))
        // setCurrentPage(p)
        // currentPage == 1 ? dispatch(setCurrencyTC(0)) : dispatch(setCurrencyTC(currentPage * 10))
    }

    return (
        <div>
            <div>
                <button>prev</button>
            </div>
            <div>
                {page.map(p => {
                    return <span onClick={() => selectPage(p)}>{p}</span>
                })}
            </div>
            <div>
                <button onClick={() => SelectNextPage}>next</button>
            </div>
        </div>
    )
}
