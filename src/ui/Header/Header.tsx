import React from "react";
import { InfoCrypto } from "./InfoCrypto/InfoCrypto";
import s from "./Header.module.css"
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import {itemType} from "../../bll/setReducer";

export const Header = () => {

    const InformationUnits = useSelector<AppRootStoreType, Array<itemType>>(state => state.setReducer.data.slice(0, 3))

    return (
        <div className={s.wrapper}>
            {/*Header*/}

                {InformationUnits.map(m => {
                    return <InfoCrypto key={m.id} name={m.name} priceUsd={m.priceUsd} />
                })}

            {/*<InfoCrypto />*/}
            {/*<InfoCrypto />*/}
            {/*<InfoCrypto />*/}
            {/*<InfoCrypto />*/}
            {/*<NavLink to={'/'}>Main</NavLink>*/}
            {/*<NavLink to={'/briefcase'}>Briefcase</NavLink>*/}
            {/*<NavLink to={'/detailInformation'}>DetailInformation</NavLink>*/}
        </div>
     )
 }