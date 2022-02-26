import React from 'react'
import {Header} from '../Header/Header';
import {Basic} from "./Basic/Basic";
import s from "./Main.module.scss";
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import preloader from "../../asset/preloader.png"

export const Main = () => {

    const setStatus = useSelector<AppRootStoreType, boolean>(state => state.setReducer.isLoading)

    return (
        <div className={s.wrapper}>
            <Header/>
            <Basic/>
            {setStatus && <div><img src={preloader} alt={'img'}/></div>}
        </div>
    )
}