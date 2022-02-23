import React from 'react'
import { Header } from '../Header/Header';
import {Basic} from "./Basic/Basic";
import s from "./Main.module.css";

export const Main = () => {
    return (
        <div className={s.wrapper}>
            <Header />
            <Basic />
            {/*<Briefcase />*/}
        </div>
    )
}