import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setDetailsTC, setHistoryTC} from "../../../../bll/serDetailsInformation";
import {useNavigate} from "react-router-dom";
import s from "./Item.module.css";
import {Modal} from "../../../Modal/Modal";


type ItemType = {
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

        // console.log(props.name)
    }

    const [isOpen, setIsOpen] = useState(false)


    return (
        <tbody>
        <tr>
            <div className={s.other_content_styles}>
                <td>{props.rank}</td>
                <td>{props.symbol}</td>
                <td onClick={clickHandler}>{props.name}</td>
                <td>${Math.floor(Number.parseInt(props.marketCapUsd))}</td>
                <td>{Math.floor(Number.parseInt(props.supply))}</td>
            </div>

            <Modal open={isOpen}
                   onClose={() => setIsOpen(false)}
                   name={props.name}
            >
            </Modal>

            <td className={s.button_wrapper_styles}>
                <button onClick={() => setIsOpen(true)}>Open Modal</button>
            </td>
        </tr>

        </tbody>

    )
}