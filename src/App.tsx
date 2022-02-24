import React, {useEffect} from 'react';
import './App.module.scss';
import {RoutesApp} from "./ui/RoutesApp/RoutesApp";
import s from "./App.module.scss";
import {setCurrencyTC} from "./bll/setReducer";
import {useDispatch} from "react-redux";
import {setInfoForHeaderTC} from "./bll/setInfoForHeader";
import {setInBriefcaseFromLocalStorage} from "./bll/setBriefcase";

export const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        console.log(localStorage.getItem('state'))
        let valueAsString = localStorage.getItem('state')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            console.log(newValue)
            dispatch(setInBriefcaseFromLocalStorage(newValue))
        }



        dispatch(setCurrencyTC(0))
        dispatch(setInfoForHeaderTC())

    }, [])

    return (
        <div className={s.app__wrapper}>
            <RoutesApp/>
        </div>
    )
}
