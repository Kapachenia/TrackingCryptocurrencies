import React from "react";
import ReactDom from 'react-dom';
import {CartItems} from "./CartItems/CartItems";
import {BriefcaseType} from "../../../bll/cart";
import "../../../styles/styles.scss"

type CartType = {
    open: boolean
    children?: React.ReactNode
    onClose: () => void
    currencyInBriefcase: Array<BriefcaseType>
    name: string
}

export const Cart = ({
                         open,
                         children,
                         onClose,
                         currencyInBriefcase,
                         name
                     }: CartType) => {

    if (!open) return null

    return ReactDom.createPortal(
        <div className={'modal'}>
            <div className={'modal__overlay'}/>
            <div className={'modal__wrapper'}>
                <span className={'modal__name modal__name--inner'}>{
                    currencyInBriefcase.length === 0 ? 'Портфель пуст' : name
                }</span>
                <div className={'modal__children'}>{children}</div>
                <div>
                    {currencyInBriefcase.map((m, index) => {
                        return <CartItems
                            key={index}
                            id={m.id}
                            name={m.name}
                            count={m.count}
                            price={m.price}
                            idTransaction={m.idTransaction}
                        />
                    })}
                </div>
                <div className={'modal__button'}>
                    <button className={'button--inner'} onClick={onClose}>Close</button>
                </div>
            </div>
        </div>,
        document.getElementById('cart') as HTMLElement
    )
}