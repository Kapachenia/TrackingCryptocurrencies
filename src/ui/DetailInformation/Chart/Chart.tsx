import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../../bll/store";
import {DetailsHistoryType} from "../../../api/api";

type ChartType = {
    symbol: string
}

export const Chart = ({symbol}: ChartType) => {

    const detailsHistory = useSelector<AppRootStoreType, Array<DetailsHistoryType>>(state => state.setDetailsReducer.detailsHistory)

    console.log(detailsHistory)

    const result = detailsHistory.map(m => m.date)

    console.log(result)

    const options = {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: `Статистика стоимости ${symbol} за последние 24ч`
        },
        xAxis: {
            categories: result.map(m => {
                const hour = new Date(m.toString()).getHours()
                const min = new Date(m.toString()).getMinutes()
               const hours =  hour < 10 ? `0${hour}` : hour
               const mins =  min < 10 ? `0${min}` : min

                return `${hours}:${mins}`
            })
        },
        series: [
            {
                name: 'Cost $',
                data: detailsHistory.map(el => Math.floor(+el.priceUsd))
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