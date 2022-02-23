import React, {useState} from "react";
import s from "./Cart.module.css";
import ReactDom from 'react-dom';
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../../bll/store";
import {BriefcaseType, currencyInBriefcaseType} from "../../../bll/briefcaseReducer";
import {BriefcaseItem} from "./BriefcaseItem/BriefcaseItem";

type ModalType = {
    open: boolean
    children?: React.ReactNode
    onClose: any
    // currencyInBriefcase: string
    currencyInBriefcase: Array<BriefcaseType>
}

export const Cart = (props: ModalType) => {

    // const [currencyValue, setCurrencyValue] = useState('awdw')



    if (!props.open) return null

    // const handleSubmit = () => {
    //     console.log(currencyValue)
    // }

    return ReactDom.createPortal(
        <div className={s.wrapperPortal}>
            <div className={s.overlay_style}/>
            <div className={s.modal_styles}>
                <div>{props.children}</div>

                <div>
                    {props.currencyInBriefcase.map(m => {
                        return <BriefcaseItem
                            name={m.name}
                            count={m.count}
                        />
                    })}
                </div>

                {/*<div>*/}
                {/*    <div className={s.value}><input type="number" value={currencyValue}*/}
                {/*                                      onChange={(e) => setCurrencyValue(e.target.value)}/></div>*/}
                {/*</div>*/}
                {/*<div className={s.wrapperButton}>*/}
                {/*    <button onClick={handleSubmit}>Купить</button>*/}
                    <button onClick={props.onClose}>Close</button>
                {/*</div>*/}
            </div>
        </div>,
        // @ts-ignore
        document.getElementById('cart')
    )
}