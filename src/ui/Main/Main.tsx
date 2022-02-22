import React from 'react'
import { Header } from '../Header/Header';
import {Items} from "./Items/Items";

export const Main = () => {
    return (
        <div>
            <span>Main</span>
            <Header />
            <Items />
        </div>
    )
}