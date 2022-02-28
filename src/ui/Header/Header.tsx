import React, {useState} from "react";
import {InfoCrypto} from "./InfoCrypto/InfoCrypto";
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import img from "../../asset/cart.png";
import {Cart} from "./Cart/Cart";
import {BriefcaseType} from "../../bll/cart";
import {ItemsType} from "../../api/api";

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
        <div className={'wrapper-center wrapper--inner header__wrapper'}>
            <div className={'header__wrapper__info'}>
                {infoForHeader.map(m => {
                    return <InfoCrypto key={m.id} name={m.name} priceUsd={m.priceUsd}/>
                })}
            </div>
            <div className={'wrapper--inner header__cart'}
                 onClick={() => setIsOpen(true)}><img className={'header__cart--img pointer'} src={img} alt="cart"/>
                <span className={'header__cart--color header__cart--inner'}>
                    {`+ ( ${isNaN(ratioResult) ? 0 : ratioResult.toFixed(2)} )%`}
                </span>
                <span className={'header__cart--color header__cart--inner'}>{
                    `+ ${reductionToNumber === 0 ? 0 : (oldPriceBriefcase[index]).toFixed(2)}`
                } USD</span>
                <span className={'header__cart--inner'}>
                    {`${reductionToNumber === undefined ? 0 : Number(reductionToNumber).toFixed(2)} USD`}
                </span>
            </div>
            <div>
                <Cart open={isOpen}
                      onClose={() => setIsOpen(false)}
                      currencyInBriefcase={currencyInBriefcase}
                      name={'Портфель'}
                >
                </Cart>
            </div>
        </div>
    )
}