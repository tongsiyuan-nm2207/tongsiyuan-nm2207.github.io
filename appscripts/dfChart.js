    
    //Add data from resources/part1.txt here
    // Source of Deepfake data: Asst.Prof. Saifuddin Ahmed, NTU Singapore. A study of deepfake sharing behavior in Eight Countries. 
    // It is good to add the source of the data at the bottom of the chart. Explore to find out how you could do this.
    
//CHART1    
    const year = [2017, 2018, 2019, 2020];
    const totalWasteGenerated = [7704, 7759, 7278, 5880];
    const totalWasteRecycled = [4724, 4790, 4293, 3040];
    const totalWasteDisposed = [2980, 2969, 2984, 2841];
    
    const data1 = {
      labels: year,
      datasets: [
        {
          label: 'Waste Recycled',
          data: totalWasteRecycled,
          backgroundColor: '#d0ecf6',
          borderColor: '#d0ecf6',
          borderWidth: 1,
        },
        {
          label: 'Waste Disposed',
          data: totalWasteDisposed,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        }
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
          stacked: true,
          ticks: {
            beginAtZero: true,
            callback: function(value, index, values) {
              return value.toLocaleString(); // add comma separators to y-axis ticks
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
    
    const ctx = document.getElementById("chart1").getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: data1,
      options: options1
    });
    

// CHART2
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
const canvas = document.getElementById('chart2');
// Create the chart
const myChart = new Chart(canvas, {
  type: 'line',
  data: data2,
  options: options2
});



//CHART3
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

const WasteRecyclingRate = [
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
        r: parseFloat(WasteRecyclingRate[i]) * 0.2,
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
        const recyclingRate = WasteRecyclingRate[tooltipItem.index];
        return `${wasteStream}: (Waste generated —— ${wasteGenerated}, Waste disposed —— ${wasteDisposed}, Recycling rate —— ${recyclingRate}）`;
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
        labelString: 'Waste Recycled',
      },
      ticks: {
        beginAtZero: true,
      }
    }]
  }
};

const chart = new Chart("chart3", {
  type: "bubble",
  data: data3,
  options: options3
});