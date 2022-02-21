import React from "react";

type ItemType = {
    symbol: string
    rank: string
}

export const Item = (props: ItemType) => {
    return (
        <tbody>
            <tr>
                <td>{props.rank}</td>
                <td>{props.symbol}</td>
                {/*<button>+</button>*/}
            </tr>
        </tbody>

    )
}