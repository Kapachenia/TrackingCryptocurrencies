import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setDetailsTC, setHistoryTC} from "../../../../../bll/serDetailsInformation";
import {useNavigate} from "react-router-dom";
import s from "./Item.module.scss";
import {Modal} from "../../../../Modal/Modal";


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
        <tbody>
        <tr className={s.content__other_styles}>
            <td>{rank}</td>
            <td className={s.symbol} onClick={clickHandler}>{symbol}</td>
            <td className={s.name} onClick={clickHandler}>{name}</td>
            <td>${Math.floor(Number.parseInt(marketCapUsd))}</td>
            <td>{Math.floor(Number.parseInt(supply))}</td>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                id={id}
                name={name}
                price={price}
            >
            </Modal>
            <td className={s.wrapper__button_styles}>
                <button className={s.bue} onClick={handleSubmit}>Купить</button>
            </td>
        </tr>
        </tbody>
    )
}