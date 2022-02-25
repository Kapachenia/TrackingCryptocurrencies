import React from "react";
import s from "./Cart.module.scss";
import ReactDom from 'react-dom';
import {BriefcaseItem} from "./BriefcaseItem/BriefcaseItem";
import {CurrencyInBriefcaseType} from "../../../bll/setBriefcase";

type CartType = {
    open: boolean
    children?: React.ReactNode
    onClose: any
    currencyInBriefcase: Array<CurrencyInBriefcaseType>
}

export const Cart = (props: CartType) => {

    if (!props.open) return null

    return ReactDom.createPortal(
        <div className={s.wrapperPortal}>
            <div className={s.overlay_style}/>
            <div className={s.modal_styles}>
                <div>{props.children}</div>
                <div>
                    {props.currencyInBriefcase.map((m, index) => {
                        return <BriefcaseItem
                            key={index}
                            id={m.id}
                            name={m.name}
                            count={m.count}
                        />
                    })}
                </div>
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>,
        document.getElementById('cart') as HTMLElement
    )
}