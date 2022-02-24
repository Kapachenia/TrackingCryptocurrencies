import React, {useState} from "react";
import {InfoCrypto} from "./InfoCrypto/InfoCrypto";
import s from "./Header.module.scss"
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import {itemType} from "../../bll/setReducer";
import img from "../../asset/cart.png";
import {Cart} from "./Cart/Cart";
import {BriefcaseType} from "../../bll/briefcaseReducer";

export const Header = () => {

    const infoForHeader = useSelector<AppRootStoreType, Array<itemType>>(state => state.headerInformation.infoForHeader)
    const [isOpen, setIsOpen] = useState(false)
    const currencyInBriefcase = useSelector<AppRootStoreType, Array<BriefcaseType>>(state => state.briefcase.currencyInBriefcase)

    return (
        <div className={s.wrapper}>

            <div className={s.wrapper__info}>
                {infoForHeader.map(m => {
                    return <InfoCrypto key={m.id} name={m.name} priceUsd={m.priceUsd}/>
                })}
            </div>
            <div className={s.cart}><img onClick={() => setIsOpen(true)} src={img} alt="cart"/></div>

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