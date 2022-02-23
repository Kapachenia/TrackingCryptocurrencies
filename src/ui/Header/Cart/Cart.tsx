import React from "react";
import s from "./Cart.module.css";
import ReactDom from 'react-dom';
import {BriefcaseType} from "../../../bll/briefcaseReducer";
import {BriefcaseItem} from "./BriefcaseItem/BriefcaseItem";

type ModalType = {
    open: boolean
    children?: React.ReactNode
    onClose: any
    currencyInBriefcase: Array<BriefcaseType>
}

export const Cart = (props: ModalType) => {

    if (!props.open) return null

    return ReactDom.createPortal(
        <div className={s.wrapperPortal}>
            <div className={s.overlay_style}/>
            <div className={s.modal_styles}>
                <div>{props.children}</div>

                <div>
                    {props.currencyInBriefcase.map(m => {
                        return <BriefcaseItem
                            id={m.id}
                            name={m.name}
                            count={m.count}
                        />
                    })}
                </div>
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>,
        // @ts-ignore
        document.getElementById('cart')
    )
}