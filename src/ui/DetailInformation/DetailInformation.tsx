import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import {Chart} from "./Chart/Chart";
import {Modal} from "../Modal/Modal";
import {useNavigate} from "react-router-dom";
import {ItemsType} from "../../api/api";
// import "../../styles/styles.scss";
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
        <div className={''}>
            <div className={''}>
                <h3 className={''}>{errorDetails === undefined ? errorDetails : 'Detail Information'}</h3>
                <div className={''}>Символ: {detailsInformation.symbol}</div>
                <div className={''}>Название актива: {detailsInformation.name}</div>
                <div className={''}>Доступное
                    предложение: {toFloor(detailsInformation.supply)}</div>
                <div className={''}>Количество
                    активов: {toFloor(detailsInformation.maxSupply)}</div>
                <div className={''}>Цена: {toFloor(detailsInformation.marketCapUsd)}</div>
                <div className={''}>Объем торгов за 24
                    часа: {toFloor(detailsInformation.volumeUsd24Hr)}$
                </div>
                <div className={''}>Цена взвешенная по
                    объему: {toFloor(detailsInformation.priceUsd)}$
                </div>
                <div className={''}>Направление и значение за 24
                    часа: {toFloor(detailsInformation.changePercent24Hr)}</div>
                <div className={''}>Средневзвешенная за 24
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
                <div className={''}>
                    <button className={''} onClick={() => setIsOpen(true)}>Купить</button>
                    <button className={''} onClick={clickHandler}>Назад</button>
                </div>
            </div>
            <div className={''}>
                <Chart symbol={detailsInformation.name}/>
            </div>
        </div>
    )
}