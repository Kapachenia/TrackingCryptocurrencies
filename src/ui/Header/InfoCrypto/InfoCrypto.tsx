import React from "react";
import {useDispatch} from "react-redux";
import s from "./InfoCrypto.module.scss"
import {setDetailsTC, setHistoryTC} from "../../../bll/serDetailsInformation";
import {useNavigate} from "react-router-dom";

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
        <div className={s.wrapper}>
            <span className={s.item} onClick={clickHandler}>{name}</span>
            <span>price</span>
            <span>{Math.floor(+priceUsd)}$</span>
        </div>
    )
}