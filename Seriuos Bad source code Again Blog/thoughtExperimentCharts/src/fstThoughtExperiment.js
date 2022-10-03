export const fstThoughtExperiment = {
  type: 'bar',
  data: {
    labels: ["Team shi*ty code", "Team clean source code"],
    datasets: [
      {
        data: [2, 1],
        backgroundColor: ["rgb(205,133,63)", "rgb(255,0,0)"]
      },
    ]
  },
  options: {
    title: { display: true, text: "Product development with one release" },
    responsive: false,
    animation: false,
    legend: { display: false },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Release number"
        },
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Total earned money"
        },
        ticks: {
          beginAtZero: true,
          callback: value => Number.isInteger(value) ? value : ""
        }
      }],
    }
  }
}
  