    
    //Add data from resources/part1.txt here
    // Source of Deepfake data: Asst.Prof. Saifuddin Ahmed, NTU Singapore. A study of deepfake sharing behavior in Eight Countries. 
    // It is good to add the source of the data at the bottom of the chart. Explore to find out how you could do this.
//DATA
const year = [2017, 2018, 2019, 2020];
const totalWasteGenerated = [7704, 7759, 7278, 5880];
const totalWasteRecycled = [4724, 4790, 4293, 3040];
const totalWasteDisposed = [2980, 2969, 2984, 2841];  

//CHART1 
// Calculate cumulative values for waste generated, recycled and disposed
const cumulativeWasteGenerated = [];
const cumulativeWasteRecycled = [];
const cumulativeWasteDisposed = [];

let totalGenerated = 0;
let totalRecycled = 0;
let totalDisposed = 0;

for (let i = 0; i < year.length; i++) {
  totalGenerated += totalWasteGenerated[i];
  totalRecycled += totalWasteRecycled[i];
  totalDisposed += totalWasteDisposed[i];

  cumulativeWasteGenerated.push(totalGenerated);
  cumulativeWasteRecycled.push(totalRecycled);
  cumulativeWasteDisposed.push(totalDisposed);
}

// Create the chart
var chart4 = new Chart(document.getElementById('chart1'), {
  type: 'line',
  data: {
    labels: year,
    datasets: [
      {
        label: 'Waste Recycled',
        data: cumulativeWasteRecycled,
        borderColor: '#008000',
        backgroundColor: 'rgba(0, 128, 0, 0.2)',
        fill: true
      },
      {
        label: 'Waste Disposed',
        data: cumulativeWasteDisposed,
        borderColor: '#FF0000',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        fill: true
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Cumulative waste generated',
      fontSize: 18,
      fontFamily: 'Libre Baskerville',
      fontColor: '#333',
      fontStyle: 'bold'
    },
    responsive: false,
    maintainAspectRatio: true,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuad'
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          const gen = totalWasteGenerated[tooltipItem.index];
          const rec = totalWasteRecycled[tooltipItem.index];
          const dis = totalWasteDisposed[tooltipItem.index];
          return `Year: ${tooltipItem.xLabel}\nWaste Generated: ${gen}\nWaste Recycled: ${rec}\nWaste Disposed: ${dis}`;
        }
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});



//CHART2
    const data1 = {
      labels: year,
      datasets: [
        {
          label: 'Total Recycling Rate',
          data: [61, 62, 59, 52], // add the Total Recycling Rate data
          type: 'line', // set the type to line
          borderColor:'orange',
          fill:false,
          yAxisID: 'y-axis-2' // add a new y-axis ID for this dataset
        },
        {
          label: 'Waste Recycled',
          data: totalWasteRecycled,
          backgroundColor: '#d0ecf6',
          borderColor: '#d0ecf6',
          borderWidth: 1,
        },
        {
          label: 'Waste Disposed',
          data: totalWasteDisposed.map(value => -value),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          hoverBackgroundColor: 'rgba(255, 19, 132, 0.8)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ]
    };
    
    const options1 = {
      title: {
        display: true,
        text: 'Overall Waste Generation and Recycling',
        fontSize: 18,
        fontFamily: 'Libre Baskerville',
        fontColor: '#333',
        fontStyle: 'bold'
      },
      responsive: false,
      maintainAspectRatio: true,
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          id: 'y-axis-1', // add an ID for the existing y-axis
          stacked: true,
          ticks: {
            beginAtZero: true,
            callback: function(value, index, values) {
              return Math.abs(value).toLocaleString(); // add comma separators to y-axis ticks and remove negative sign
            }
          },
        },
        {
          id: 'y-axis-2', // add an ID for the new y-axis
          position: 'right', // set the position to the right side of the chart
          ticks: {
            beginAtZero: true,
            suggestedMax: 100, // set a suggested maximum value for the y-axis
            callback: function(value, index, values) {
              return value + '%'; // add a percentage sign to y-axis ticks
            }
          }
        }]
      },
      tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function(tooltipItem, data) {
            const datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
            const wasteGenerated = totalWasteGenerated[tooltipItem.index];
            const wasteRecycled = totalWasteRecycled[tooltipItem.index];
            const wasteDisposed = totalWasteDisposed[tooltipItem.index];
            let label = '';
            
            if (datasetLabel === 'Waste Recycled') {
              label += `Recycled: ${wasteRecycled.toLocaleString()}`;
            } else if (datasetLabel === 'Waste Disposed') {
              label += `Disposed: ${wasteDisposed.toLocaleString()}`;
              label += '\n';
              label += ` Generated: ${wasteGenerated.toLocaleString()}`;
            }
            
            return label;
          }
        }
      }
    };
    
    const ctx = document.getElementById("chart2").getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: data1,
      options: options1
    });
    

// CHART3
// Define the data
const data2 = {
  labels: ['2017', '2018', '2019', '2020'],
  datasets: [
    {
      label: 'Total Recycling Rate',
      data: [61, 62, 59, 52],
      borderColor: 'blue',
      fill: false,
      lineTension: 0,
      pointRadius: 0,
      pointHitRadius: 10,
      pointHoverRadius: 5,
      pointBackgroundColor: 'blue',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointStyle: 'circle',
      className: 'series-path'
    },
    {
      label: 'Total Domestic Recycling Rate',
      data: [21, 22, 17, 13],
      borderColor: 'green',
      fill: false,
      lineTension: 0,
      pointRadius: 0,
      pointHitRadius: 10,
      pointHoverRadius: 5,
      pointBackgroundColor: 'green',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointStyle: 'circle',
      className: 'series-path'
    },
    {
      label: 'Total Non-Domestic Recycling Rate',
      data: [76, 75, 73, 68],
      borderColor: 'red',
      fill: false,
      lineTension: 0,
      pointRadius: 0,
      pointHitRadius: 10,
      pointHoverRadius: 5,
      pointBackgroundColor: 'red',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointStyle: 'circle',
      className: 'series-path'
    }
  ]
};

// Configure the options
const options2 = {
  title: {
    display: true,
    text: 'Overall Recycling Rate',
    fontSize: 18,
    fontFamily: 'Libre Baskerville',
    fontColor: '#333',
    fontStyle: 'bold'
  },
  responsive: false,
  maintainAspectRatio: true,
  scales: {
    xAxes: [{
      gridLines: {
        display: false
      },
      scaleLabel: {
        display: true,
        labelString: 'Year'
      }
    }],
    yAxes: [{
      gridLines: {
        display: false
      },
      scaleLabel: {
        display: true,
        labelString: 'Recycling Rate (%)'
      },
      ticks: {
        beginAtZero: true,
        max: 100
      }
    }]
  },
  elements: {
    line: {
      borderWidth: 0,
    }
  },
  plugins: [{
    beforeInit: function(chart, options) {
      chart.data.datasets.forEach(function(dataset) {
        var meta = chart.getDatasetMeta(chart.data.datasets.indexOf(dataset));
        meta.lineCap = 'round';
        meta.lineJoin = 'round';
      });
    }
  }]
};
const canvas = document.getElementById('chart3');
// Create the chart
const myChart = new Chart(canvas, {
  type: 'line',
  data: data2,
  options: options2
});



//CHART4
const WasteStream = [
  "Ferrous metal",
  "Paper/Cardboard",
  "Construction & Demolition",
  "Plastics",
  "Food",
  "Horticultural",
  "Wood",
  "Ash & sludge",
  "Textile/Leather",
  "Used slag",
  "Non-ferrous metal",
  "Glass",
  "Scrap tyres",
  "Others"
];

const WasteGenerated = [
  1312,
  1136,
  1013,
  982,
  817,
  332,
  310,
  249,
  189,
  182,
  88,
  74,
  27,
  233
];

const WasteDisposed = [
  6,
  699,
  2,
  924,
  663,
  55,
  76,
  227,
  182,
  1,
  1,
  65,
  1,
  214
];

const WasteDisposalRate = [
  "1%",
  "61",
  "1%",
  "94%",
  "81%",
  "17%",
  "24%",
  "81%",
  "96%",
  "1%",
  "2%",
  "87%",
  "5%",
  "92%"
];

const data3 = {
  datasets: [
    {
      label: "Waste Stream",
      data: WasteStream.map((waste, i) => ({
        x: WasteGenerated[i],
        y: WasteDisposed[i],
        r: parseFloat(WasteDisposalRate[i]) * 0.3,
        label: WasteStream[i]
      })),
      backgroundColor: 'rgba(51, 102, 204, 0.7)'
    }
  ]
};

const options3 = {
  responsive: false,
  maintainAspectRatio: true,
  title: {
    display: true,
    text: 'Efforts in 2022',
    fontSize: 18,
    fontFamily: 'Libre Baskerville',
    fontColor: '#333',
    fontStyle: 'bold'
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        const wasteStream = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].label;
        const wasteGenerated = tooltipItem.xLabel;
        const wasteDisposed = tooltipItem.yLabel;
        const disposalRate = WasteDisposalRate[tooltipItem.index];
        return `${wasteStream}: (Waste generated —— ${wasteGenerated}, Waste disposed —— ${wasteDisposed}, Disposal rate —— ${disposalRate}）`;
      }
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false
      },
      scaleLabel: {
        display: true,
        labelString: 'Waste Generated',
      }
    }],
    yAxes: [{
      gridLines: {
        display: false
      },
      scaleLabel: {
        display: true,
        labelString: 'Waste Disposed',
      },
      ticks: {
        beginAtZero: true,
      }
    }]
  },
};

const chart = new Chart("chart4", {
  type: "bubble",
  data: data3,
  options: options3
});

