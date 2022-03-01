import React from 'react'
import {Header} from '../Header/Header';
import {Basic} from "./Basic/Basic";
import {AppRootStoreType} from "../../bll/store";
import {useSelector} from "react-redux";
import preloader from "../../asset/preloader.png"

export const Content = () => {

    const setStatus = useSelector<AppRootStoreType, boolean>(state => state.setReducer.isLoading)
    const error = useSelector<AppRootStoreType, string>(state => state.setReducer.error)


    return (
        <div>
            <div className={'preloader__inner'}>
                {setStatus && <div><img className={'preloader__inner--img'} src={preloader} alt={'img'}/></div>}
            </div>
            <Header/>
            {
                error ?
                    <div className={'error__basic'}>
                        {`${error} Try Again Later`}
                    </div>
                    : <Basic/>
            }
        </div>
    )
}