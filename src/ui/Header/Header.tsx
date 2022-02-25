import React, {useState} from "react";
import {InfoCrypto} from "./InfoCrypto/InfoCrypto";
import s from "./Header.module.scss"
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import {itemType} from "../../bll/setReducer";
import img from "../../asset/cart.png";
import {Cart} from "./Cart/Cart";
import {BriefcaseType} from "../../bll/setBriefcase";

export const Header = () => {

    const infoForHeader = useSelector<AppRootStoreType, Array<itemType>>(state => state.headerInformation.infoForHeader)
    const [isOpen, setIsOpen] = useState(false)
    const currencyInBriefcase = useSelector<AppRootStoreType, Array<BriefcaseType>>(state => state.briefcase.currencyInBriefcase)
    const priceBriefcase = useSelector<AppRootStoreType, string | number>(state => state.briefcase.priceBriefcase)
    const oldPriceBriefcase = useSelector<AppRootStoreType, Array<number>>(state => state.briefcase.oldPriceBriefcase)
    const TotalBriefcaseFromLocalStorage = useSelector<AppRootStoreType, Array<BriefcaseType>>(state => state.briefcase.currencyInBriefcase)

    const index = oldPriceBriefcase.length - 2
    const index2 = oldPriceBriefcase.length - 1

    const result = (Number(priceBriefcase) - oldPriceBriefcase[index]) / Number(priceBriefcase) * 100


    let reductionToNumber = Math.ceil((
        TotalBriefcaseFromLocalStorage
            .map(m => m.price == undefined ? m.price = '0' : m.price)
            .map(m => Number(m))
            .reduce((previous, current) => previous + current)
    ) * 100) / 100

    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__info}>
                {infoForHeader.map(m => {
                    return <InfoCrypto key={m.id} name={m.name} priceUsd={m.priceUsd}/>
                })}
            </div>
            <div className={s.cart} onClick={() => setIsOpen(true)}><img src={img} alt="cart"/>
                {/*<span className={s.addInCart}>+ {isNaN(result) ? 0 : Math.floor(result)} %</span>*/}
                <span className={s.addInCart}>+ {isNaN(result) ? 0 : Math.floor(result)} %</span>
                <span className={s.addInCart}>+ {

                    reductionToNumber == 0 ? '0' : (oldPriceBriefcase[index2]).toFixed(2)

                } USD</span>
                <span>
                    {Number(priceBriefcase).toFixed(2)} USD
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