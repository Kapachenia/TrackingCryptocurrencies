import React, {useState} from "react";
import s from "./Modal.module.scss";
import ReactDom from 'react-dom';
import {useDispatch} from "react-redux";
import {addPriceInBriefcase, setInBriefcase, setOldPriceBriefcase} from "../../bll/setBriefcase";

type ModalType = {
    open: boolean
    children?: React.ReactNode
    onClose: () => void
    id?: string
    name?: string
    price?: string
}

export const Modal = ({
                          onClose,
                          price,
                          id,
                          name,
                          children,
                          open
                      }: ModalType) => {

    const [currencyValue, setCurrencyValue] = useState(0)
    const dispatch = useDispatch()

    if (!open) return null

    const handleSubmit = () => {
        dispatch(setInBriefcase(id, name, currencyValue, Number(price) * currencyValue))
        setCurrencyValue(0)
        dispatch(addPriceInBriefcase(currencyValue * Number(price)))
        dispatch(setOldPriceBriefcase(Math.ceil((Number(price)) * 1000) / 1000 * currencyValue))
    }

    return ReactDom.createPortal(
        <div className={s.wrapperPortal}>
            <div className={s.overlay__style}/>
            <div className={s.modal__styles}>
                <span className={s.name}>{name}</span>
                <div>{children}</div>
                <div>
                    <div className={s.value}><input type="number" value={currencyValue}
                                                    onChange={(e) => setCurrencyValue(Number(e.target.value))}/>
                    </div>
                </div>
                <div className={s.wrapper__button}>
                    <button onClick={handleSubmit}>Купить</button>
                    <button onClick={onClose}>Закрыть</button>
                </div>
            </div>
        </div>,
        document.getElementById('portal') as HTMLElement
    )
}