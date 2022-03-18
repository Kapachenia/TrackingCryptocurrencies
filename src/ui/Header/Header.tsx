import React, {useState} from "react";
import {InfoCrypto} from "./InfoCrypto/InfoCrypto";
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import img from "../../asset/cart.png";
import {Cart} from "./Cart/Cart";
import {BriefcaseType} from "../../bll/cart";
import {ItemsType} from "../../api/api";
import s from "../Header/Header.module.scss"

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const infoForHeader = useSelector<AppRootStoreType, Array<ItemsType>>(state => state.headerInformation.infoForHeader)
    const currencyInBriefcase = useSelector<AppRootStoreType, Array<BriefcaseType>>(state => state.cart.currencyInBriefcase)
    const priceBriefcase = useSelector<AppRootStoreType, number>(state => state.cart.priceBriefcase)
    const oldPriceBriefcase = useSelector<AppRootStoreType, Array<number>>(state => state.cart.oldPriceBriefcase)
    const totalBriefcaseFromLocalStorage = useSelector<AppRootStoreType, Array<BriefcaseType>>(state => state.cart.currencyInBriefcase)

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
        reductionToNumber = 0
    } else {
        reductionToNumber = totalBriefcaseFromLocalStorage
            .map(m => m.price).reduce((prev, current) => prev + current)
    }

    return (
        <div className={s.header}>

            <div className={`${s.container} ${s.header__top}`}>
                {infoForHeader.map(m => {
                    return <InfoCrypto key={m.id} name={m.name} priceUsd={m.priceUsd}/>
                })}
            </div>
            {/*//price*/}
            <div className={s.header__price}>
                <div className={s.header__cartInfo}>
                    <span className={s.header__item}>
                            {`${reductionToNumber === undefined ? 0 : Number(reductionToNumber).toFixed(2)} USD`}
                        </span>
                    <span className={s.header__item}>{
                        `+ ${reductionToNumber === 0 ? 0 : (oldPriceBriefcase[index]).toFixed(2)}`
                    } USD
                        </span>
                    <span className={s.header__item}>
                    {`+ ( ${isNaN(ratioResult) ? 0 : ratioResult.toFixed(2)} )%`}
                    </span>
                </div>
                <div className={s.header__buttonCart}>
                    <img className={s.logo__img}
                         onClick={() => setIsOpen(true)}
                         src={img}
                         alt="cart"
                    />
                    <Cart open={isOpen}
                          onClose={() => setIsOpen(false)}
                          currencyInBriefcase={currencyInBriefcase}
                          name={'Портфель'}
                    >
                    </Cart>
                </div>
            </div>
        </div>
    )
}