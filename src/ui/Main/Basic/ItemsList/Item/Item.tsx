import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setDetailsTC, setHistoryTC} from "../../../../../bll/detailsInformation";
import {useNavigate} from "react-router-dom";
import {Modal} from "../../../../Modal/Modal";
import s from "../Item/Item.module.scss";

type ItemType = {
    id: string
    symbol: string
    rank: string
    name: string
    supply: string
    price: string
}

export const Item = ({
                         id,
                         price,
                         name,
                         symbol,
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
        <tbody className={s.table__list}>
        <tr>
            <td className={s.table__item}>{rank}</td>
            <td className={`${s.table__item} ${s.pointer}`} onClick={clickHandler}>{symbol}</td>
            <td className={`${s.table__item} ${s.pointer}`} onClick={clickHandler}>{name}</td>
            <td className={s.table__item}>${Number(price).toFixed(2)}</td>
            <td className={s.table__item}>{Math.floor(Number.parseInt(supply))}</td>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                id={id}
                name={name}
                price={price}
            >
            </Modal>
            <td>
                <button className={s.table__button} onClick={handleSubmit}>Купить</button>
            </td>
        </tr>
        </tbody>
    )
}