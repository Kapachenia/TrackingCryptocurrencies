import React from "react";
import {useDispatch} from "react-redux";
import {setDetailsTC, setHistoryTC} from "../../../bll/detailsInformation";
import {useNavigate} from "react-router-dom";
import s from "../InfoCrypto/InfoCrypto.module.scss"


type InfoCryptoType = {
    name: string
    priceUsd: string
}

export const InfoCrypto = ({name, priceUsd}: InfoCryptoType) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const clickHandler = () => {
        dispatch(setDetailsTC(name.toLowerCase()))
        dispatch(setHistoryTC(name.toLowerCase()))
        navigate("/detailInformation")
    }

    return (
        <div className={s.header__info}>
            <span className={s.header__info__item} onClick={clickHandler}>{name}</span>
            <span className={s.header__info__item}>price</span>
            <span className={s.header__info__item}>{Math.floor(+priceUsd)}$</span>
        </div>
    )
}