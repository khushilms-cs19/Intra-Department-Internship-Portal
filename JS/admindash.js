

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

button1 = document.getElementById('b1');
button2 = document.getElementById('b2');

button1.style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)"
var current = 0;
function setChart(num){
    switch(num){
        case 0: {
            button2.style.boxShadow = "none";
            button1.style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)"
            break;
        }
        case 1: {
            button1.style.boxShadow = "none";
            button2.style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
            break;    
        }
        default: {
            console.log("default");
        }
    }
    current = num;
    drawChart();
}

function drawChart() {

    var data = [];
    data[0] = google.visualization.arrayToDataTable([
        ['Job Type', 'Field of Work'],
        ['Web Dev',   11],
        ['ML',         6],
        ['Web Design', 8],
        ['App Dev',   10],
        ['DevOps',     3]
    ]);

    data[1] = google.visualization.arrayToDataTable([
        ['Stipend(Rs)', 'Job'],
        ['75,000',  5],
        ['50,000',  4],
        ['25,000',  5],
        ['65,000',  2],
        ['40,000',  8]
    ]);

    var options = {
        height: 750,
        width: 750,
        chartArea: {
            height: "70%",
            width: "70%"
        },
        legend: {
            position: 'top'
        },
        backgroundColor: {
            fillOpacity: 0,
            fill: '#00ccff'
        },
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out'
        }
    }
    var chart = new google.visualization.PieChart(document.getElementById('chartContainer'));
    chart.draw(data[current],options)
}