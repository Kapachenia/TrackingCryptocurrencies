import React, {useState} from "react";
import ReactDom from 'react-dom';
import {useDispatch} from "react-redux";
import {addPriceInBriefcase, setInBriefcase, setOldPriceBriefcase} from "../../bll/cart";
import "../../styles/styles.scss"

type ModalType = {
    open: boolean
    children?: React.ReactNode
    onClose: () => void
    id: string
    name: string
    price: string
}

export const Modal = ({
                          onClose,
                          price,
                          id,
                          name,
                          children,
                          open
                      }: ModalType) => {

    const [currencyValue, setCurrencyValue] = useState<number>(0)
    const dispatch = useDispatch()

    if (!open) return null
    console.log(currencyValue, 'VALUE')
    const handleSubmit = () => {
        if (currencyValue && currencyValue > 0) {
            dispatch(setInBriefcase(id, name, Number(currencyValue), Number(Number(price) * currencyValue)))
            setCurrencyValue(0)
            dispatch(addPriceInBriefcase(currencyValue * Number(price)))
            dispatch(setOldPriceBriefcase(Number(price) * currencyValue))
        }
    }

    return ReactDom.createPortal(
        <div className={'modal'}>
            <div className={'modal__overlay'}/>
            <div className={'modal__wrapper'}>
                <span className={'modal__name'}>{name}</span>
                <div>{children}</div>
                <div>
                    <div className={'input--inner'}>
                        <input type="text"
                               step="0.1"
                               value={currencyValue}
                               onChange={(e) => {
                                   if (/^[0-9]+$/.test(e.target.value)) {
                                       const number = +e.target.value.replace(/^0+/, '')
                                       setCurrencyValue(number)
                                   }
                               }
                               }
                        />
                    </div>
                </div>
                <div className={'modal__wrapper-button wrapper--inner'}>
                    <div className={'modal__button--inner'}>
                        <button className={'button'} onClick={handleSubmit}>Купить</button>
                    </div>
                    <div className={'modal__button--inner'}>
                        <button className={'button'} onClick={onClose}>Закрыть</button>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('portal') as HTMLElement
    )
}