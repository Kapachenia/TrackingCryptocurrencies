import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setDetailsTC, setHistoryTC} from "../../../../../bll/detailsInformation";
import {useNavigate} from "react-router-dom";
import {Modal} from "../../../../Modal/Modal";
// import "../../../../../styles/styles.scss";

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
        <tbody className={''}>
        <tr className={''}>
            <td className={''}>{rank}</td>
            <td className={''} onClick={clickHandler}>{symbol}</td>
            <td className={''} onClick={clickHandler}>{name}</td>
            <td className={''}>${Number(price).toFixed(2)}</td>
            <td className={''}>{Math.floor(Number.parseInt(supply))}</td>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                id={id}
                name={name}
                price={price}
            >
            </Modal>
            <td className={''}>
                <button className={''} onClick={handleSubmit}>Купить</button>
            </td>
        </tr>
        </tbody>
    )
}