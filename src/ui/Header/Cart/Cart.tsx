import React from "react";
import s from "./Cart.module.scss";
import ReactDom from 'react-dom';
import {BriefcaseItem} from "./BriefcaseItem/BriefcaseItem";
import {BriefcaseType} from "../../../bll/setBriefcase";

type CartType = {
    open: boolean
    children?: React.ReactNode
    onClose: () => void
    currencyInBriefcase: Array<BriefcaseType>
}

export const Cart = ({
                         open,
                         children,
                         onClose,
                         currencyInBriefcase
                     }: CartType) => {

    if (!open) return null

    return ReactDom.createPortal(
        <div className={s.wrapperPortal}>
            <div className={s.overlay_style}/>
            <div className={s.modal_styles}>
                <div>{children}</div>
                <div>
                    {currencyInBriefcase.map((m, index) => {
                        return <BriefcaseItem
                            key={index}
                            id={m.id}
                            name={m.name}
                            count={m.count}
                            price={m.price}
                        />
                    })}
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        document.getElementById('cart') as HTMLElement
    )
}