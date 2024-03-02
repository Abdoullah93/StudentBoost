function refresh_plot(){
    var trace1 = {
      x: ['01-01-2024', '02-01-2024', '03-01-2024'],//les dates associée aux sessions 
      y: [20, 14, 23],//le temps de travail de chaque session recupéré lié aux dates
      name: 'Algorithmique',
      type: 'bar'
    };
    
    var trace2 = {
      x: ['01-01-2024', '02-01-2024', '03-01-2024'],
      y: [12, 18, 29],
      name: 'Java',
      type: 'bar'
    };
    
    var data = [trace1, trace2]; // autant de trace qu'il ya de nom de session distincte
    
    var layout = {
      barmode: 'stack',
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)'
    };
    Plotly.newPlot('myDiv', data, layout);
    console.log("je suis la")
  }
    