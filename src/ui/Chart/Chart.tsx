import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {useSelector} from "react-redux";
import {CurrencyUnitHistory} from "../../bll/serDetailsInformation";
import {AppRootStoreType} from "../../bll/store";

type ChartType = {
    symbol?: string
}

export const Chart = (props: ChartType) => {

    const detailsHistory = useSelector<AppRootStoreType, Array<CurrencyUnitHistory>>(state => state.setDetailsReducer.detailsHistory)

    const options = {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: props.symbol
        },
        xAxis: {
            categories: detailsHistory.map(m => m.date)


        },
        series: [
            {
                name: 'Cost $',
                 data: detailsHistory.map((el) => {return Math.floor(+el.priceUsd)})
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