import React from "react";

type ItemType = {
    symbol: string
    rank: string
    name: string
    marketCapUsd: string
    supply: string
}

export const Item = (props: ItemType) => {
    return (
        <tbody>
            <tr>
                <td>{props.rank}</td>
                <td>{props.symbol}</td>
                <td>{props.name}</td>
                <td>${Math.floor(Number.parseInt(props.marketCapUsd))}</td>
                <td>{Math.floor(Number.parseInt(props.supply))}</td>
                {/*<button>+</button>*/}
            </tr>
        </tbody>

    )
}