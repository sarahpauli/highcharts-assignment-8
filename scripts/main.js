// Data retrieved from https://data.worldbank.org/indicator/SP.POP.TOTL?end=2023&start=2013&view=chart
Highcharts.chart('container1', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Top 3 Largest Countries by Population from 2013 to 2023'
    },
    xAxis: {
        allowDecimals: false,
        accessibility: {
            rangeDescription: 'Range: 2013 to 2023.'
        }
    },
    yAxis: {
        title: {
            text: 'Population Size'
        }
    },
    tooltip: {
        pointFormat: '{series.name} had a population of <b>{point.y:,.0f}</b><br/>' +
            ' in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 2013,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'China',
        data: [
            1363240000, 1371860000, 1379860000, 1387790000, 1396215000, 1402760000, 1407745000, 1411100000, 1412360000, 1412175000, 1410710000
        ]
    }, {
        name: 'India',
        data: [
            1291132063, 1307246509, 1322866505, 1338636340, 1354195680, 1369003306, 1383112050, 1396387127, 1407563842, 1417173173, 1428627663
        ]
    }, {
        name: 'United States',
        data: [
            316059947, 318386529, 320738994, 323071755, 325122128, 326838199, 328329953, 331526933, 332048977, 333271411, 334914895
        ]
    }]
});

//Data retrieved from https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?end=2023&start=2013
Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Top 3 Largest Countries by Population Employment Rates from 2013 to 2023 (% of Total Labor Force)',
    },
    xAxis: {
        categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        crosshair: true,
        accessibility: {
            description: 'Years'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent'
        }
    },
    tooltip: {
        valueSuffix: ' %'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'China',
            data: [4.6, 4.6, 4.7, 4.6, 4.5, 4.3, 4.6, 5, 4.5, 5, 4.7]
        },
        {
            name: 'India',
            data: [8.1, 8, 7.9, 7.8, 7.7, 7.7, 6.5, 7.9, 6.4, 4.8, 4.2]
        },  {
            name: 'United States',
            data: [7.4, 6.2, 5.3, 4.9, 4.4, 3.9, 3.7, 8.1, 5.3, 3.6, 3.6]
        }
    ]
});

