import React from 'react'
import { Header } from '../Header/Header';
import {Basic} from "./Basic/Basic";
import s from "./Main.module.scss";

export const Main = () => {
    return (
        <div className={s.wrapper}>
            <Header />
            <Basic />
            {/*<Briefcase />*/}
        </div>
    )
}