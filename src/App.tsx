import React, {useEffect} from 'react';
import {RoutesApp} from "./ui/RoutesApp/RoutesApp";
import {useDispatch} from "react-redux";
import {setInfoForHeaderTC} from "./bll/infoHeader";
import {priceBriefcaseFromLocalStorage} from "./bll/cart";
import {setCurrencyTC} from "./bll/setReducer";

export const App = () => {

    const dispatch = useDispatch()
    const infoFromLocalStorage = JSON.parse(localStorage.getItem('state') || '[]')

    useEffect(() => {
        dispatch(setCurrencyTC(0))
        dispatch(setInfoForHeaderTC())
        if (infoFromLocalStorage.length > 0) {
            dispatch(priceBriefcaseFromLocalStorage(infoFromLocalStorage))
        }
    }, [])

    return (
        <div className={'wrapper-center wrapper__app'}>
            <RoutesApp/>
        </div>
    )
}
