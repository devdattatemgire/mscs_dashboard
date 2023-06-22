// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
  series: [{
    data: [19, 9, 1, 28, 1, 8, 6, 4, 2, 3, 5, 1, 3, 4, 1, 3, 1, 1],
    name: "STATE",
  }],
  chart: {
    type: "bar",
    background: "transparent",
    height: 500,
    toolbar: {
      show: false,
    },
  },
  colors: [
    "#2962ff",
    "#d50000",
    "#2e7d32",
    "#ff6d00",
    "#583cb3",
    "#ff4081",
    "#00acc1",
    "#cddc39",
    "#9c27b0",
    "#607d8b",
    "#ffab00",
    "#e91e63",
    "#3f51b5",
    "#4caf50",
    "#ff5722",
    "#8e24aa",
    "#039be5",
    "#fdd835"
  ],
  
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: true, // Set to true for horizontal bar chart
      barHeight: "80%", // Reduce the space between two bars
    }
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: false,
    position: "top",
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  yaxis: {
  
    title: {
      style: {
        color: "#f5f7ff",
      },
    },
    axisBorder: {
      show: true,
      color: "#55596e",
    },
    axisTicks: {
      show: true,
      color: "#55596e",
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  xaxis: {
    categories: ['UTTAR PRADESH',
    'KERALA',
    'UTTARAKHAND',
    'MAHARASHTRA',
    'PUNJAB',
    'TAMIL NADU',
    'TELANGANA',
    'HARYANA',
    'ANDHRA PRADESH',
    'MANIPUR',
    'NEW DELHI',
    'JAMMU AND KASHMIR',
    'MADHYA PRADESH',
    'GUJARAT',
    'ASSAM',
    'BIHAR',
    'KARNATAKA',
    'WEST BENGAL'],
    title: {
      text: "No. of Registered Socities",
      style: {
        color:  "#f5f7ff",
      },
    },
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


// SECTOR WISE CHART
var barChartOptions = {
  series: [{
    data: [6, 52, 9, 2, 5, 1, 5, 1, 3, 10, 2, 2, 1],
    name: "STATE",
  }],
  chart: {
    type: "bar",
    background: "transparent",
    height: 500,
    toolbar: {
      show: false,
    },
  },
  colors: [
    "#2962ff",
    "#d50000",
    "#2e7d32",
    "#ff6d00",
    "#583cb3",
    "#ff4081",
    "#00acc1",
    "#cddc39",
    "#9c27b0",
    "#607d8b",
    "#ffab00",
    "#e91e63",
    "#3f51b5"
    
  ],
  
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: true, // Set to true for horizontal bar chart
      barHeight: "80%", // Reduce the space between two bars
    }
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: false,
    position: "top",
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  yaxis: {
    
    title: {
      style: {
        color: "#f5f7ff",
      },
    },
    axisBorder: {
      show: true,
      color: "#55596e",
    },
    axisTicks: {
      show: true,
      color: "#55596e",
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  xaxis: {
    categories: ['Credit',
      'Agro',
      'Health/Hospital',
      'Federation',
      'Housing',
      'Tourism',
      'Fisheries',
      'Construction',
      'Others',
      'Cooperative Bank',
      'Industrial/Textile',
      'Marketing',
      'Dairy'],
    title: {
      text: "No. of Registered Societies",
      style: {
        color:  "#f5f7ff",
      },
    },
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  }
};

var barChart = new ApexCharts(document.querySelector("#area-chart"), barChartOptions);
barChart.render();

// Year WISE CHART
var barChartOptions = {
  series: [{
    data: [3, 8, 8, 9, 10, 14, 47],
    name: "STATE",
  }],
  chart: {
    type: "bar",
    background: "transparent",
    height: 500,
    toolbar: {
      show: false,
    },
  },
  colors: [
    "#2962ff",
    "#d50000",
    "#2e7d32",
    "#ff6d00",
    "#583cb3",
    "#ff4081",
    "#00acc1"
    
  ],
  
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: true, // Set to true for horizontal bar chart
      barHeight: "80%", // Reduce the space between two bars
    }
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: false,
    position: "top",
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  yaxis: {
    
    title: {
      style: {
        color: "#f5f7ff",
      },
    },
    axisBorder: {
      show: true,
      color: "#55596e",
    },
    axisTicks: {
      show: true,
      color: "#55596e",
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  xaxis: {
    categories: ['2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022'],
    title: {
      text: "No. of Registered Societies",
      style: {
        color:  "#f5f7ff",
      },
    },
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  }
};

var barChart = new ApexCharts(document.querySelector("#year-chart"), barChartOptions);
barChart.render();

//trends

      
// var trendsChartoptions = {
//   series: [
//   {
//     name: "UTTAR PRADESH",
//     data: [null, 2, 1, 1, 4, 4,6]
//   },
//   {
//     name: "KERALA",
//     data: [null, null, null,1,null , null, 8]
//   },
//   {
//     name: "UTTARAKHAND",
//     data: [null,null , null,null , null,null , 1]
//   },
//   {
//     name: "MAHARASHTRA",
//     data: [1,3 ,2 , 1, 1, 1, 19]
//   },
//   {
//     name: "PUNJAB",
//     data: [null,null ,null ,null ,null ,null , 1]
//   },
//   {
//     name: "TAMIL NADU",
//     data: [null, 1,2 ,1, 1,null , 3]
//   },
//   {
//     name: "TELANGANA",
//     data: [null,1 ,null ,3, null, null, 2]
//   },
//   {
//     name: "HARYANA",
//     data: [null,null ,null ,1,1 , 1,1]
//   },
//   {
//     name: "ANDHRA PRADESH",
//     data: [null,null ,null , null, 1, null, 1]
//   },
//   {
//     name: "MANIPUR",
//     data: [null,null ,null , null,null , 1, 2]
//   },
//   {
//     name: "NEW DELHI",
//     data: [1, null, 1, null, null, 1, 2]
//   },
//   {
//     name: "JAMMU AND KASHMIR",
//     data: [null,null , null,null ,null ,null , 1]
//   },
//   {
//     name: "MADHYA PRADESH",
//     data: [null,null ,null ,null ,1 ,2 ,null ]
//   },
//   {
//     name: "GUJARAT",
//     data: [null,null ,1 ,null, null,3 ,null ]
//   },
//   {
//     name: "ASSAM",
//     data: [null,null ,null ,null , null,1 ,null ]
//   },
//   {
//     name: "BIHAR",
//     data: [1,null , 1, null,1 , null, null]
//   },
//   {
//     name: "KARNATAKA",
//     data: [null, null, null,1, null, null, null]
//   },
//   {
//     name: "WEST BENGAL",
//     data: [null,1 ,null ,null ,null , null,null ]
//   },
// ],
//   chart: {
//   height: 500,
//   type: 'line',
//   dropShadow: {
//     enabled: true,
//     color: '#000',
//     top: 18,
//     left: 7,
//     blur: 10,
//     opacity: 0.2
//   },
//   toolbar: {
//     show: false
//   }
// },
// colors: ["#2962ff",
// "#d50000",
// "#2e7d32",
// "#ff6d00",
// "#583cb3",
// "#ff4081",
// "#00acc1",
// "#cddc39",
// "#9c27b0",
// "#607d8b",
// "#ffab00",
// "#e91e63",
// "#3f51b5",
// "#4caf50",
// "#ff5722",
// "#8e24aa",
// "#039be5",
// "#fdd835"],
// dataLabels: {
//   enabled: true,

  
// },
// stroke: {
//   curve: 'smooth'
// },
// title: {
//   show:'false',
//   text: 'a',
//   align: 'left',
  
// },
// grid: {
//   borderColor: '#e7e7e7',
//   row: {
//     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//     opacity: 0.5
//   },
// },
// markers: {
//   size: 1
// },
// xaxis: {
//   categories: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
//   title: {
//     text: 'Year',
//     style: {
//       color: '#ffffff',
//     } 
//   },
//   axisBorder: {
//     color: "#55596e",
//     show: true,
//   },
//   axisTicks: {
//     color: "#55596e",
//     show: true,
//   },
//   labels: {
//     style: {
//       colors: "#f5f7ff",
//     },
//   },

// },
// yaxis: {
//   title: {
//     text: 'No. of Registered Societies',
//     style: {
//       color: '#ffffff',
//     }
//   }, 
//   axisBorder: {
//     color: "#55596e",
//     show: true,
//   },
//   axisTicks: {
//     color: "#55596e",
//     show: true,
//   },
//   labels: {
//     style: {
//       colors: "#f5f7ff",
//     },
//   },

//   min: 0,
//   max: 25,
  
// },

// legend: {
//   position: 'top',
//   horizontalAlign: 'left',
//   show: true,
//   floating: false,
//   offsetY: -25,
//   offsetX: -5,
//   labels: {
//     colors: '#ffffff' // Set legend text color to white
//   }
// }
// };

// var chart = new ApexCharts(document.querySelector("#trends-chart"), trendsChartoptions);
// chart.render();

