import React from "react";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div>
            Header
            <NavLink to={'/'}>Main</NavLink>
            {/*<NavLink to={'/briefcase'}>Briefcase</NavLink>*/}
            <NavLink to={'/detailInformation'}>DetailInformation</NavLink>
        </div>
     )
 }