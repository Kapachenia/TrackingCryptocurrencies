import React from "react";
import {useSelector} from "react-redux";
import {itemType} from "../../../bll/setReducer";
import {AppRootStoreType} from "../../../bll/store";
import {Item} from "./Item/Items";

export const Items = () => {


    const itemCurrency = useSelector<AppRootStoreType, Array<itemType>>(state => state.setReducer.data)




    return (
        <div>
            <button>Click</button>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Наименование</th>
                        </tr>
                    </thead>
                    {itemCurrency.map(m => (<Item
                        key={m.id}
                        symbol={m.symbol}
                        rank={m.rank}
                    />))}
                </table>
            </div>

        </div>
    )
}