import React from "react";
import {useDispatch} from "react-redux";
import {setDetailsTC, setHistoryTC} from "../../../bll/detailsInformation";
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
        <div className={'wrapper__header-content'}>
            <span className={'header__item pointer width'} onClick={clickHandler}>{name}</span>
            <span className={'header__item pointer width'}>price</span>
            <span className={'header__item pointer width'}>{Math.floor(+priceUsd)}$</span>
        </div>
    )
}