import { parseProblemsForLanguage, parseProblem } from "./measurementParser.js"

export const createChartObjectForProb1To10 = (lines) => ({
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [
      {
        label: 'C',
        data: parseProblemsForLanguage((number) => new RegExp(`${number}/main\\.exe`), 1, 10, lines),
        borderColor: "rgb(205,133,63)",
      },
      {
        label: 'Java',
        data: parseProblemsForLanguage((number) => new RegExp(`${number}/Main\\.java`), 1, 10, lines),
        borderColor: "rgb(255,0,0)",
      },
      {
        label: 'JavaScript',
        data: parseProblemsForLanguage((number) => new RegExp(`${number}/main\\.js`), 1, 10, lines),
        borderColor: "rgb(255,215,0)",
      },
      {
        label: 'Python',
        data: parseProblemsForLanguage((number) => new RegExp(`python.*${number}\\.main`), 1, 10, lines),
        borderColor: "rgb(75, 75, 192)",
      },
    ]
  },
  options: {
    title: { display: true, text: "Problems 01 - 10" },
    responsive: false,
    animation: false,
    scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "problem number"
          },
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "t/s in average with 100 runs"
          },
          ticks: { min: 0 }
        }],
    },
    elements: {
      line: { fill: false }
    }
  }
})
  
export const createBarObjectForProb = (probNumber, lines, title, xAxesLabel, scaleTime = 1) => ({
  type: 'horizontalBar',
  data: {
    labels: ["C", "Java", "JavaScript", "Python"],
    datasets: [
      {
        data: [
          parseProblem(new RegExp(`${probNumber}/main\\.exe`), lines) / scaleTime
          , parseProblem(new RegExp(`${probNumber}/Main\\.java`), lines)  / scaleTime
          , parseProblem(new RegExp(`${probNumber}/main\\.js`), lines)  / scaleTime
          , parseProblem(new RegExp(`python.*${probNumber}\\.main`), lines)  / scaleTime
        ],
        backgroundColor: [
          "rgb(205,133,63)"
          , "rgb(255,0,0)"
          , "rgb(255,215,0)"
          , "rgb(75, 75, 192)"
        ]
      },
    ]
  },
  options: {
    title: { display: true, text: title },
    responsive: false,
    animation: false,
    legend: { display: false },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: xAxesLabel
        },
      }],
    }
  }
})
  