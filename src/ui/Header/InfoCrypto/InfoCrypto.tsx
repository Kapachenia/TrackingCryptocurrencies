import React from "react";
import {useDispatch} from "react-redux";
import s from "./InfoCrypto.module.scss"
import {setDetailsTC, setHistoryTC} from "../../../bll/serDetailsInformation";
import {useNavigate} from "react-router-dom";

type InfoCryptoType = {
    name: string
    priceUsd: string
}

export const InfoCrypto = (props: InfoCryptoType) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const clickHandler = () => {
        dispatch(setDetailsTC(props.name.toLowerCase()))
        dispatch(setHistoryTC(props.name.toLowerCase()))
        navigate("/detailInformation")
    }

    return (
        <div className={s.wrapper}>
            <span className={s.item} onClick={clickHandler}>{props.name}</span>
            <span>price</span>
            <span>{Math.floor(+props.priceUsd)}$</span>
        </div>
    )
}