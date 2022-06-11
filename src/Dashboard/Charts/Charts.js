import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Charts.scss';
const options = {
  title: {
    text: '',
  },
  chart: {
    type: 'area',
    borderRadius: 10,
    marginTop: 30,
    height: 400,
  },
  yAxis: {
    title: {
      text: null,
    },
    tickInterval: 100,
  },
  xAxis: {
    tickInterval: 1,
  },

//   legend: {
//     layout: 'vertical',
//     align: 'right',
//     verticalAlign: 'middle',
//   },

  tooltip: {
    pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
},

  plotOptions: {
    area: {
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
    name: 'Mobile apps',
    data: [ 50, 40, 300, 220, 500, 250, 400, 230, 500 ],
  }, {
    name: 'Website',
    data: [ 30, 90, 40, 140, 290, 290, 340, 230, 400 ],
  }],

  responsive: {
    rules: [{
      condition: {
        width: '100%',
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
        },
      },
    }],
  },

  credits: {
    enabled: false,
  },

};
function Charts() {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options} />
    </div>
  );
}

export default Charts;
