import React, {useState} from "react";
import {InfoCrypto} from "./InfoCrypto/InfoCrypto";
import s from "./Header.module.scss"
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import img from "../../asset/cart.png";
import {Cart} from "./Cart/Cart";
import {BriefcaseType} from "../../bll/setBriefcase";
import {ItemsType} from "../../api/api";

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const infoForHeader = useSelector<AppRootStoreType, Array<ItemsType>>(state => state.headerInformation.infoForHeader)
    const currencyInBriefcase = useSelector<AppRootStoreType, Array<BriefcaseType>>(state => state.briefcase.currencyInBriefcase)
    const priceBriefcase = useSelector<AppRootStoreType, number>(state => state.briefcase.priceBriefcase)
    const oldPriceBriefcase = useSelector<AppRootStoreType, Array<number>>(state => state.briefcase.oldPriceBriefcase)
    const totalBriefcaseFromLocalStorage = useSelector<AppRootStoreType, Array<BriefcaseType>>(state => state.briefcase.currencyInBriefcase)

    const index = oldPriceBriefcase.length - 1
    let previousBriefcaseValue = priceBriefcase - oldPriceBriefcase[oldPriceBriefcase.length - 1]

    if (previousBriefcaseValue === 0) {
        previousBriefcaseValue = oldPriceBriefcase[oldPriceBriefcase.length - 1]
    }

    const result = [...oldPriceBriefcase]
    const ratio = previousBriefcaseValue / [...oldPriceBriefcase][result.length - 1]
    const ratioResult = 100 / ratio
    let reductionToNumber

    if (totalBriefcaseFromLocalStorage.length === 0) {
        let reductionToNumber = 0
    } else {
        reductionToNumber = totalBriefcaseFromLocalStorage
            .map(m => m.price).reduce((prev, current) => prev + current)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__info}>
                {infoForHeader.map(m => {
                    return <InfoCrypto key={m.id} name={m.name} priceUsd={m.priceUsd}/>
                })}
            </div>
            <div className={s.cart} onClick={() => setIsOpen(true)}><img src={img} alt="cart"/>
                <span className={s.addInCart}>+ {isNaN(ratioResult) ? 0 : ratioResult.toFixed(2)} %</span>
                <span className={s.addInCart}>+ {
                    reductionToNumber === 0 ? 0 : (oldPriceBriefcase[index]).toFixed(2)
                } USD</span>
                <span>
                    {reductionToNumber === undefined ? 0 : Number(reductionToNumber).toFixed(2)} USD
                </span>
            </div>
            <div>
                <Cart open={isOpen}
                      onClose={() => setIsOpen(false)}
                      currencyInBriefcase={currencyInBriefcase}
                >
                </Cart>
            </div>
        </div>
    )
}