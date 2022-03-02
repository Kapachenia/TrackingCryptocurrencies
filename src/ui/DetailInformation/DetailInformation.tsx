import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import {Chart} from "./Chart/Chart";
import {Modal} from "../Modal/Modal";
import {useNavigate} from "react-router-dom";
import {ItemsType} from "../../api/api";
import "../../styles/styles.scss";
import {setCurrencyTC} from "../../bll/setReducer";

export const DetailInformation = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const detailsInformation = useSelector<AppRootStoreType, ItemsType>(state => state.setDetailsReducer.detailsInformation)
    const errorDetails = useSelector<AppRootStoreType, string>(state => state.setDetailsReducer.errorDetails)

    const toFloor = (num: string) => {
        if (num) return Math.floor(Number(num))
    }

    const clickHandler = () => {
        dispatch(setCurrencyTC(0))
        navigate("/")
    }

    return (
        <div className={'wrapper-center detail '}>
            <div className={'content-detail'}>
                <h3 className={'title'}>{errorDetails === undefined ? errorDetails : 'Detail Information'}</h3>
                <div className={'content-detail__item'}>Символ: {detailsInformation.symbol}</div>
                <div className={'content-detail__item'}>Название актива: {detailsInformation.name}</div>
                <div className={'content-detail__item'}>Доступное
                    предложение: {toFloor(detailsInformation.supply)}</div>
                <div className={'content-detail__item'}>Количество
                    активов: {toFloor(detailsInformation.maxSupply)}</div>
                <div className={'content-detail__item'}>Цена: {toFloor(detailsInformation.marketCapUsd)}</div>
                <div className={'content-detail__item'}>Объем торгов за 24
                    часа: {toFloor(detailsInformation.volumeUsd24Hr)}$
                </div>
                <div className={'content-detail__item'}>Цена взвешенная по
                    объему: {toFloor(detailsInformation.priceUsd)}$
                </div>
                <div className={'content-detail__item'}>Направление и значение за 24
                    часа: {toFloor(detailsInformation.changePercent24Hr)}</div>
                <div className={'content-detail__item'}>Средневзвешенная за 24
                    часа: {toFloor(detailsInformation.vwap24Hr)}</div>
                <div>
                    <Modal open={isOpen}
                           onClose={() => setIsOpen(false)}
                           id={detailsInformation.id}
                           name={detailsInformation.name}
                           price={detailsInformation.priceUsd}
                    >
                    </Modal>
                </div>
                <div className={'detail-information'}>
                    <button className={'button--inner'} onClick={() => setIsOpen(true)}>Купить</button>
                    <button className={'button--inner'} onClick={clickHandler}>Назад</button>
                </div>
            </div>
            <div className={'detail__chart detail'}>
                <Chart symbol={detailsInformation.name}/>
            </div>
        </div>
    )
}