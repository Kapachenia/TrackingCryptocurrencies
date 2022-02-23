import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import {CurrencyUnit} from "../../bll/serDetailsInformation";
import {Chart} from "../Chart/Chart";
import s from "./DetailInformation.module.scss"
import {Modal} from "../Modal/Modal";
import {useNavigate} from "react-router-dom";
import {setCurrencyTC} from "../../bll/setReducer";

export const DetailInformation = () => {

    const dispatch = useDispatch()

    const detailsInformation = useSelector<AppRootStoreType, CurrencyUnit>(state => state.setDetailsReducer.detailsInformation)

    const toFloor = (num: any) => {
        if (num) return Math.floor(num)
    }

    const [isOpen, setIsOpen] = useState(false)


    let navigate = useNavigate()

    const clickHandler = () => {
        dispatch(setCurrencyTC(0))
        navigate("/")
    }


    return (
        <div className={s.wrapper}>
            <div className={s.centre}>
                <h3>Detail Information</h3>
                <div>Символ: {detailsInformation.symbol}</div>
                <div>Название актива: {detailsInformation.name}</div>
                <div>Доступное предложение: {toFloor(detailsInformation.supply)}</div>
                <div>Количество активов: {toFloor(detailsInformation.maxSupply)}</div>
                <div>Цена: {toFloor(detailsInformation.marketCapUsd)}</div>
                <div>Объем торгов за 24 часа: {toFloor(detailsInformation.volumeUsd24Hr)}$</div>
                <div>Цена взвешенная по объему: {toFloor(detailsInformation.priceUsd)}$</div>
                <div>Направление и значение за 24 часа: {toFloor(detailsInformation.changePercent24Hr)}</div>
                <div>Средневзвешенная по объему цена за 24 часа: {toFloor(detailsInformation.vwap24Hr)}</div>
                <div>
                    <Modal open={isOpen}
                           onClose={() => setIsOpen(false)}
                           name={detailsInformation.name}
                    >
                    </Modal>
                </div>
                <div className={s.button_wrapper_styles}>
                    <button className={s.wrapperButton} onClick={() => setIsOpen(true)}>Купить</button>
                    <button className={s.wrapperButton} onClick={clickHandler}>Назад</button>
                </div>
            </div>
            <div className={s.wrapperChart}>
                <Chart symbol={detailsInformation.name} />
            </div>
        </div>
    )
}