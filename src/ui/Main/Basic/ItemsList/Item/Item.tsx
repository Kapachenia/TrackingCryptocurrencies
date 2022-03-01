import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setDetailsTC, setHistoryTC} from "../../../../../bll/detailsInformation";
import {useNavigate} from "react-router-dom";
import {Modal} from "../../../../Modal/Modal";
import "../../../../../styles/styles.scss";

type ItemType = {
    id: string
    symbol: string
    rank: string
    name: string
    marketCapUsd: string
    supply: string
    price: string
}

export const Item = ({
                         id,
                         price,
                         name,
                         symbol,
                         marketCapUsd,
                         rank,
                         supply
                     }: ItemType) => {

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const clickHandler = () => {
        dispatch(setDetailsTC(name.toLowerCase()))
        dispatch(setHistoryTC(name.toLowerCase()))
        navigate("/detailInformation")
    }

    const handleSubmit = () => {
        setIsOpen(true)
    }

    return (
        <tbody className={'item-content'}>
        <tr className={'wrapper__content'}>
            <td className={'item-content--cell'}>{rank}</td>
            <td className={'item-content--name item-content--cell pointer hidden'} onClick={clickHandler}>{symbol}</td>
            <td className={'item-content--name item-content--cell pointer'} onClick={clickHandler}>{name}</td>
            <td className={'item-content--cell item-content--cell'}>${Math.floor(Number.parseInt(marketCapUsd))}</td>
            <td className={'item-content--cell item-content--cell hidden hidden'}>{Math.floor(Number.parseInt(supply))}</td>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                id={id}
                name={name}
                price={price}
            >
            </Modal>
            <td className={'wrapper__content__button item-content--cell'}>
                <button className={'item-content--buy pointer'} onClick={handleSubmit}>Купить</button>
            </td>
        </tr>
        </tbody>
    )
}