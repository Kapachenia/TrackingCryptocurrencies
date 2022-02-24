import React, {useState} from "react";
import s from "./Modal.module.css";
import ReactDom from 'react-dom';
import {useDispatch} from "react-redux";
import {setInBriefcase} from "../../bll/briefcaseReducer";

type ModalType = {
    open: boolean
    children?: React.ReactNode
    onClose: any
    id?: string
    name?: string
}

export const Modal = (props: ModalType) => {

    const [currencyValue, setCurrencyValue] = useState(0)

    const dispatch = useDispatch()

    if (!props.open) return null

    const handleSubmit = () => {
        // console.log(currencyValue)
        dispatch(setInBriefcase(props.id, props.name, currencyValue))
        setCurrencyValue(0)
    }

    return ReactDom.createPortal(
        <div className={s.wrapperPortal}>
            <div className={s.overlay_style}/>
            <div className={s.modal_styles}>
                <span className={s.name}>{props.name}</span>
                <div>{props.children}</div>
                <div>
                    <div className={s.value}><input type="number" value={currencyValue}
                                                      onChange={(e) => setCurrencyValue(Number(e.target.value))}/></div>
                </div>
                <div className={s.wrapperButton}>
                    <button onClick={handleSubmit}>Купить</button>
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>,
        document.getElementById('portal') as HTMLElement
    )
}