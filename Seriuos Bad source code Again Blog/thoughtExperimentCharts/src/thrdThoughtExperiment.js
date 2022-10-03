import { releaseValue2ChartData } from "./releaseValue2ChartData.js"

export const thrdThoughtExperiment = {
  type: 'line',
  data: {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: 'Team ?',
        borderColor: "rgb(0,0,255)",
      },
      {
        label: 'Team clean source code',
        data: releaseValue2ChartData([1, 2, 2, 1, 1]),
        borderColor: "rgb(255,0,0)",
      }
    ]
  },
  options: {
    title: { display: true, text: "Product development with competition taking market share" },
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
          ticks: { min: 0, max: 16  }
        }],
    },
    elements: {
      line: { fill: true }
    }
  }
}
