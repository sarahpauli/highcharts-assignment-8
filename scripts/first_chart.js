// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic 

Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Pears', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in John and Suzanne\'s house'
      }
    },
    series: [{
      name: 'John',
      data: [6, 1, 0, 4]
    }, {
      name: 'Suzanne',
      data: [6, 5, 7, 3]
    }]
  });
