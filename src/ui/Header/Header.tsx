import React from "react";
import {NavLink} from "react-router-dom";
import { InfoCrypto } from "./InfoCrypto/InfoCrypto";

export const Header = () => {
    return (
        <div>
            Header
            <InfoCrypto />
            {/*<NavLink to={'/'}>Main</NavLink>*/}
            {/*<NavLink to={'/briefcase'}>Briefcase</NavLink>*/}
            {/*<NavLink to={'/detailInformation'}>DetailInformation</NavLink>*/}
        </div>
     )
 }