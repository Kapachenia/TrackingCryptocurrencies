import React, {useState} from "react";
import {InfoCrypto} from "./InfoCrypto/InfoCrypto";
import s from "./Header.module.css"
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import {itemType} from "../../bll/setReducer";
import img from "../../asset/cart.png";
import {Modal} from "../Modal/Modal";
import {Cart} from "./Cart/Cart";
import {BriefcaseType} from "../../bll/briefcaseReducer";

export const Header = () => {

    const InformationUnits = useSelector<AppRootStoreType, Array<itemType>>(state => state.setReducer.data.slice(0, 3))

    const [isOpen, setIsOpen] = useState(false)

    const currencyInBriefcase = useSelector<AppRootStoreType, Array<BriefcaseType>>(state => state.briefcase.currencyInBriefcase)

    return (
        <div className={s.wrapper}>

            <div className={s.wrapperInfo}>
                {InformationUnits.map(m => {
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