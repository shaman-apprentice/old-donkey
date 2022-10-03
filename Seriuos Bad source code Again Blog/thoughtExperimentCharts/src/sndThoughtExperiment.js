import { releaseValue2ChartData } from "./releaseValue2ChartData.js"

export const sndThoughtExperiment = {
  type: 'line',
  data: {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: 'Team shi*ty code',
        data: releaseValue2ChartData([2, 2, 3, 3, 4]),
        borderColor: "rgb(205,133,63)",
      },
      {
        label: 'Team clean source code',
        data: releaseValue2ChartData([1, 2, 3, 4, 5]),
        borderColor: "rgb(255,0,0)",
      }
    ]
  },
  options: {
    title: { display: true, text: "Product development with five releases" },
    responsive: false,
    animation: false,
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
          ticks: { min: 0 }
        }],
    },
    elements: {
      line: { fill: true }
    }
  }
}
