import React, {useEffect, useState} from "react";
import ReactDom from 'react-dom';
import {useDispatch} from "react-redux";
import {addPriceInBriefcase, setInBriefcase, setOldPriceBriefcase} from "../../bll/cart";
// import "../../styles/styles.scss"
import {v1} from "uuid";

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

    const [currencyValue, setCurrencyValue] = useState('')
    const [showMessage, setShowMessage] = useState('')
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (toggle) {
            let timeout = setTimeout(function () {
                setShowMessage('')
            }, 3000)
            return () => {
                clearTimeout(timeout)
            }
        }
    }, [toggle])

    if (!open) return null

    const handleSubmit = () => {
        if (currencyValue && +currencyValue <= 10) {
            setShowMessage(`Успешно куплено ${currencyValue} ${name}`)
            dispatch(setInBriefcase(id, name, Number(currencyValue), Number(Number(price) * +currencyValue), v1()))
            setCurrencyValue('')
            dispatch(addPriceInBriefcase(+currencyValue * Number(price)))
            dispatch(setOldPriceBriefcase(Number(price) * +currencyValue))
            setToggle(true)
        } else if (currencyValue && +currencyValue > 10) {
            setShowMessage(`Лимит покупки 10 единиц`)
            setCurrencyValue('')
        }
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isFinite(+e.target.value)) {
            setCurrencyValue(e.target.value)
        }
    }

    return ReactDom.createPortal(
        <div className={''}>
            <div className={'modal__overlay'}/>
            <div className={''}>
                <span className={''}>{`1 ${name} = ${Number(price).toFixed(2)} $`}</span>
                <div>{children}</div>
                <div>
                    <div className={''}>
                        <input type="text"
                               placeholder={'0'}
                               value={currencyValue}
                               onChange={(e) => changeHandler(e)}
                        />
                    </div>
                </div>
                <div className={''}>
                    <div className={''}>
                        <button className={''} onClick={handleSubmit}>Купить</button>
                    </div>
                    <div className={''}>
                        <button className={''} onClick={onClose}>Закрыть</button>
                    </div>
                </div>
                <div className=''>{showMessage}</div>
            </div>
        </div>,
        document.getElementById('portal') as HTMLElement
    )
}