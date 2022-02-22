import React from "react";
import {useDispatch} from "react-redux";
import { setDetailsTC } from "../../../../bll/serDetailsInformation";
import { useNavigate } from "react-router-dom";

type ItemType = {
    symbol: string
    rank: string
    name: string
    marketCapUsd: string
    supply: string
}

export const Item = (props: ItemType) => {

let navigate = useNavigate()

    const dispatch = useDispatch()


const clickHandler = () => {
    let result = props.name
    result.toLowerCase()
    dispatch(setDetailsTC(result.toLowerCase()))
    navigate("/detailInformation")

    console.log(props.name)
}


    return (
        <tbody>
            <tr>
                <td>{props.rank}</td>
                <td>{props.symbol}</td>
                <td onClick={clickHandler}>{props.name}</td>
                <td>${Math.floor(Number.parseInt(props.marketCapUsd))}</td>
                <td>{Math.floor(Number.parseInt(props.supply))}</td>
                {/*<button>+</button>*/}
            </tr>
        </tbody>

    )
}