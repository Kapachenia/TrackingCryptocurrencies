import React, {useEffect} from 'react';
import './App.module.scss';
import {RoutesApp} from "./ui/RoutesApp/RoutesApp";
import s from "./App.module.scss";
import {setCurrencyTC} from "./bll/setReducer";
import {useDispatch} from "react-redux";
import {setInfoForHeaderTC} from "./bll/setInfoForHeader";
import {
    priceBriefcaseFromLocalStorage,
} from "./bll/setBriefcase";

export const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrencyTC(0))
        dispatch(setInfoForHeaderTC())
        //@ts-ignore
        let parseForBriefcase = JSON.parse(localStorage.getItem('state'))
        if (parseForBriefcase.length > 1) {
            dispatch(priceBriefcaseFromLocalStorage(parseForBriefcase))
        }

    }, [])

    return (
        <div className={s.app__wrapper}>
            <RoutesApp/>
        </div>
    )
}
