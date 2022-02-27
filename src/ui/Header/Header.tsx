import React, {useState} from "react";
import {InfoCrypto} from "./InfoCrypto/InfoCrypto";
import s from "./Header.module.scss"
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import img from "../../asset/cart.png";
import {Cart} from "./Cart/Cart";
import {CurrencyInBriefcaseType} from "../../bll/setBriefcase";
import {ItemsType} from "../../api/api";

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const infoForHeader = useSelector<AppRootStoreType, Array<ItemsType>>(state => state.headerInformation.infoForHeader)
    const currencyInBriefcase = useSelector<AppRootStoreType, Array<CurrencyInBriefcaseType>>(state => state.briefcase.currencyInBriefcase)
    const priceBriefcase = useSelector<AppRootStoreType, number>(state => state.briefcase.priceBriefcase)
    const oldPriceBriefcase = useSelector<AppRootStoreType, Array<number>>(state => state.briefcase.oldPriceBriefcase)
    const TotalBriefcaseFromLocalStorage = useSelector<AppRootStoreType, Array<CurrencyInBriefcaseType>>(state => state.briefcase.currencyInBriefcase)

    const index = oldPriceBriefcase.length - 1

    let PreviousBriefcaseValue = priceBriefcase - oldPriceBriefcase[oldPriceBriefcase.length - 1]

    let res2 = [...oldPriceBriefcase]

    let ratio = PreviousBriefcaseValue / res2[res2.length - 1]

    const result = 100 / ratio

    // console.log(TotalBriefcaseFromLocalStorage)

    let reductionToNumber

    if (TotalBriefcaseFromLocalStorage.length === 0) {
        let reductionToNumber = 0
    } else {
        // @ts-ignore
        reductionToNumber = TotalBriefcaseFromLocalStorage.map(m => m.price).reduce((prev, current) => prev + current)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__info}>
                {infoForHeader.map(m => {
                    return <InfoCrypto key={m.id} name={m.name} priceUsd={m.priceUsd}/>
                })}
            </div>
            <div className={s.cart} onClick={() => setIsOpen(true)}><img src={img} alt="cart"/>
                <span className={s.addInCart}>+ {isNaN(result) ? 0 : result.toFixed(2)} %</span>
                <span className={s.addInCart}>+ {
                    reductionToNumber === '0' ? '0' : (oldPriceBriefcase[index]).toFixed(2)
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
            {/*<NavLink to={'/'}>Main</NavLink>*/}
            {/*<NavLink to={'/briefcase'}>Briefcase</NavLink>*/}
            {/*<NavLink to={'/detailInformation'}>DetailInformation</NavLink>*/}
        </div>
    )
}

export const InfoForHeader = () => {
    return (
        <div>

        </div>
    )
}