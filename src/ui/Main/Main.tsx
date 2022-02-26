import React from 'react'
import {Header} from '../Header/Header';
import {Basic} from "./Basic/Basic";
import s from "./Main.module.scss";
import {AppRootStoreType} from "../../bll/store";
import {useSelector} from "react-redux";
import preloader from "../../asset/preloader.png"

export const Main = () => {

    const setStatus = useSelector<AppRootStoreType, boolean>(state => state.setReducer.isLoading)

    console.log(setStatus)

    return (
        <div className={s.wrapper}>
            <Header/>
            <Basic/>
            {setStatus && <div><img src={preloader} alt={'img'}/></div>}
        </div>
    )
}