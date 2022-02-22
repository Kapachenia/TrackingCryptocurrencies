import React from "react";
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import {CurrencyUnit} from "../../bll/serDetailsInformation";

export const DetailInformation = () => {

    const detailsInformation = useSelector<AppRootStoreType, CurrencyUnit>(state => state.setDetailsReducer.detailsInformation)

    return (
        <div>
            DetailInformation
            <div>{detailsInformation.symbol}</div>
            <div>{detailsInformation.name}</div>
            <div>{detailsInformation.supply}</div>
            <div>{detailsInformation.maxSupply}</div>
            <div>{detailsInformation.marketCapUsd}</div>
            <div>{detailsInformation.volumeUsd24Hr}</div>
            <div>{detailsInformation.priceUsd}</div>
            <div>{detailsInformation.changePercent24Hr}</div>
            <div>{detailsInformation.vwap24Hr}</div>
        </div>
    )
}