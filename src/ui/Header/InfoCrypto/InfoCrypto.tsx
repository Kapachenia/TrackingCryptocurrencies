import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStoreType} from "../../../bll/store";
import s from "./InfoCrypto.module.css"
import {setDetailsTC, setHistoryTC} from "../../../bll/serDetailsInformation";
import {useNavigate} from "react-router-dom";

type InfoCryptoType = {
    name: string
    priceUsd: string
}

export const InfoCrypto = (props: InfoCryptoType) => {

    const dispatch = useDispatch()

    let navigate = useNavigate()

    const clickHandler = () => {
        dispatch(setDetailsTC(props.name.toLowerCase()))

        dispatch(setHistoryTC(props.name.toLowerCase()))
        navigate("/detailInformation")

        // console.log(props.name)
    }

    return (
        <div className={s.wrapper}>
            {/*name*/}
            <span className={s.item} onClick={clickHandler}>{props.name}</span>
            {/*maxSupply*/}
            <span>price</span>
            {/*priceUsd*/}
            <span>{Math.floor(+props.priceUsd)}$</span>
        </div>
    )
}