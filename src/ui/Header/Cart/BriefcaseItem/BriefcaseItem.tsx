import React from "react";

type BriefcaseItemType = {
    name: string
    count: string
}

export const BriefcaseItem = (props: BriefcaseItemType) => {
    return (
        <div>
            <div>
                {props.name}
            </div>
            <div>
                {props.count}
            </div>
            <div>
                <button>x</button>
            </div>
        </div>
    )
}