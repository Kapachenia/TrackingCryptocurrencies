import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import {DetailsHistoryType} from "../../api/api";

type ChartType = {
    symbol: string
}

export const Chart = ({symbol}: ChartType) => {

    const detailsHistory = useSelector<AppRootStoreType, Array<DetailsHistoryType>>(state => state.setDetailsReducer.detailsHistory)

    const options = {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: symbol
        },
        xAxis: {
            categories: detailsHistory.map(m => m.date)
        },
        series: [
            {
                name: 'Cost $',
                data: detailsHistory.map(el => {
                    return Math.floor(+el.priceUsd)
                })
            }
        ]
    };

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
        </div>
    )
}