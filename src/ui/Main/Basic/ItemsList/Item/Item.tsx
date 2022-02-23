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
}

export const Item = (props: ItemType) => {

    let navigate = useNavigate()

    const dispatch = useDispatch()


    const clickHandler = () => {
        dispatch(setDetailsTC(props.name.toLowerCase()))

        dispatch(setHistoryTC(props.name.toLowerCase()))
        navigate("/detailInformation")
    }

    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = () => {
        setIsOpen(true)
    }

    return (
        <tbody>
        <tr className={s.content__other_styles}>
            <td>{props.rank}</td>
            <td className={s.symbol} onClick={clickHandler}>{props.symbol}</td>
            <td className={s.name} onClick={clickHandler}>{props.name}</td>
            <td>${Math.floor(Number.parseInt(props.marketCapUsd))}</td>
            <td>{Math.floor(Number.parseInt(props.supply))}</td>

            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                id={props.id}
                name={props.name}
            >
            </Modal>

            <td className={s.wrapper__button_styles}>
                <button className={s.bue} onClick={handleSubmit}>Купить</button>
            </td>
        </tr>

        </tbody>

    )
}