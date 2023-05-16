<script>
      var ctx1 = document.getElementById('myChart1').getContext('2d');
      var myChart1 = new Chart(ctx1, {
          type: 'bar',
          data: {
            labels: ["Day1", "Day2","Day3","Day4","Day5","Day6","Day7",],
            datasets: [{ 
                data: [86,114,106,106,107,111,133],
                label: "Total",
                borderColor: "#3cba9f",
                backgroundColor: "#3cba9f",
                hoverBackgroundColor: "rgb(62, 200, 36, 0.6)",
                borderWidth:2
              }, { 
                data: [70,90,44,60,83,90,100],
                label: "Accepted",
                borderColor: "#ffa500",
                backgroundColor: "#ffa500",
                borderWidth:2
              }, { 
                data: [10,21,60,44,17,21,17],
                label: "Pending",
                borderColor: "#c45850",
                backgroundColor:"#c45850",
                borderWidth:2
              }, { 
                data: [6,3,2,2,7,0,16],
                label: "Rejected",
                borderColor: "#3e95cd",
                backgroundColor:"#3e95cd",
                borderWidth:2
              }
            ]
          },
          options: {
            plugins: {
              title: {
                display: true,
                // text: 'Chart.js Bar Chart - Stacked'
               },
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true
              }
            },
          }
        });
      var ctx2 = document.getElementById('myChart2').getContext('2d');
      var myChart2 = new Chart(ctx2, {
          type: 'doughnut',
          data: {
            labels: ["Accepted","Pending", "Rejected"],
            datasets: [{ 
                data: [70,10,6],
                borderColor:[
                  "#3cba9f",
                  "#ffa500",
                  "#c45850",
                ],
                backgroundColor: [
                  "#3cba9f",
                  "#ffa500",
                  "#c45850",
                ],
                borderWidth:2,
              }]
          },
          options: {
            plugins: {
              title: {
                display: true,
                // text: 'Chart.js Bar Chart - Stacked'
               },
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true
              }
            }
          },

      });
      var ctx3 = document.getElementById('myChart3').getContext('2d');
      var myChart3 = new Chart(ctx3, {
          type: 'pie',
          data: {
            labels: ["Accepted","Pending", "Rejected"],
            datasets: [{ 
                data: [70,10,6],
                borderColor:[
                  "#3cba9f",
                  "#ffa500",
                  "#c45850",
                ],
                backgroundColor: [
                  "#3cba9f",
                  "#ffa500",
                  "#c45850",
                ],
                borderWidth:2,
              }]
          },
          options: {
            plugins: {
              title: {
                display: true,
                // text: 'Chart.js Bar Chart - Stacked'
               },
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true
              }
            }
          },
      });
      var ctx4 = document.getElementById('myChart4').getContext('2d');
      var myChart4 = new Chart(ctx4, {
          type: 'bubble',
          data: {
            datasets: [{ 
                data: [
                  {x: 17, y: 3, r:36},
                ],
                label: "Blue Team",
                borderColor: "#3e95cd",
                backgroundColor: "#3e95cd",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 10, y: 1.6, r:20},
                ],
                label: "Green Team",
                borderColor: "#3cba9f",
                backgroundColor: "#3cba9f",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 4.8, y: 3.2, r:30},
                ],
                label: "Yellow Team",
                borderColor: "#c45850",
                backgroundColor:"#c45850",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 14, y: 0, r:9}
                ],
                label: "Red Team",
                borderColor: "#ffa500",
                backgroundColor:"#ffa500",
                borderWidth:2,
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: '# of wins'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: '# of games'
                }
              }],
            }
          },
        });
        var ctx5 = document.getElementById('myChart5').getContext('2d');
      var myChart5 = new Chart(ctx5, {
          type: 'bar',
          data: {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [{ 
                data: [86,114,106,106,107,111,133],
                label: "Total",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205)",
                borderWidth:2,
                type: 'line',
                fill:false
              }, { 
                data: [70,90,44,60,83,90,100],
                label: "Accepted",
                borderColor: "#3cba9f",
                backgroundColor: "#3cba9f",
                borderWidth:2
              }, { 
                data: [10,21,60,44,17,21,17],
                label: "Pending",
                borderColor: "#ffa500",
                backgroundColor:"#ffa500",
                borderWidth:2,
              }, { 
                data: [6,3,2,2,7,0,16],
                label: "Rejected",
                borderColor: "#c45850",
                backgroundColor:"#c45850",
                borderWidth:2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [{ 
                scaleLabel: {
                  display: true,
                  // labelString: '# of wins'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  // labelString: '# of games'
                }
              }],
            }
          },
        });
    </script>
