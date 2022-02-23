import React, { useEffect } from 'react';
import './App.module.css';
import {RoutesApp} from "./ui/RoutesApp/RoutesApp";
import s from "./App.module.css";
import {setCurrencyTC} from "./bll/setReducer";
import {useDispatch} from "react-redux";

export const App = () => {

    const dispatch = useDispatch()

    // useEffect(() => {
    //   dispatch(setCurrencyTC(0))
    // }, [])

    return (
        <div className={s.wrapperApp}>
            <RoutesApp />
        </div>
    )


}
