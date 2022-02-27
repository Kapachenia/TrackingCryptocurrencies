import React, {useEffect} from 'react';
import './App.module.scss';
import {RoutesApp} from "./ui/RoutesApp/RoutesApp";
import s from "./App.module.scss";
import {setCurrencyTC} from "./bll/setReducer";
import {useDispatch} from "react-redux";
import {setInfoForHeaderTC} from "./bll/setInfoForHeader";
import {priceBriefcaseFromLocalStorage} from "./bll/setBriefcase";

export const App = () => {

    const dispatch = useDispatch()
    const infoFromLofalStorage = JSON.parse(localStorage.getItem('state') || '[]')

    useEffect(() => {
        dispatch(setCurrencyTC(0))
        dispatch(setInfoForHeaderTC())
        if (infoFromLofalStorage.length > 0) {
            dispatch(priceBriefcaseFromLocalStorage(infoFromLofalStorage))
        }
    }, [])

    return (
        <div className={s.app__wrapper}>
            <RoutesApp/>
        </div>
    )
}
