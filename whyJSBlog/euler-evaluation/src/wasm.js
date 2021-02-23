import { parseProblemsForLanguage, parseProblem } from "./measurementParser.js"

export const createChartObjectForProb1To10 = (lines) => ({
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [
      {
        label: 'C',
        data: parseProblemsForLanguage((number) => new RegExp(`'c/${number}/main\\.exe'`), 1, 10, lines),
        borderColor: "rgb(107, 52, 235)",
      },
      {
        label: 'C -O3',
        data: parseProblemsForLanguage((number) => new RegExp(`'c-O3/${number}/main\\.exe'`), 1, 10, lines),
        borderColor: "rgb(53, 224, 230)",
      },
      {
        label: 'JavaScript',
        data: parseProblemsForLanguage((number) => new RegExp(`'node js/${number}/main\\.js`), 1, 10, lines),
        borderColor: "rgb(255, 215, 0)",
      },
      {
        label: 'WebAssembly',
        data: parseProblemsForLanguage((number) => new RegExp(`'node wasm/${number}/main\\.js`), 1, 10, lines),
        borderColor: "rgb(237, 5, 67)",
      },
      {
        label: 'WebAssembly -O3',
        data: parseProblemsForLanguage((number) => new RegExp(`'node wasm-O3/${number}/main\\.js`), 1, 10, lines),
        borderColor: "rgb(245, 160, 2)",
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
    labels: ["C", "C -O3", "WebAssembly -O3", "WebAssembly", "JavaScript"],
    datasets: [
      {
        data: [
          parseProblem(new RegExp(`c/${probNumber}/main\\.exe`), lines) / scaleTime
          , parseProblem(new RegExp(`c-O3/${probNumber}/main\\.exe`), lines)  / scaleTime
          , parseProblem(new RegExp(`wasm-O3/${probNumber}/main\\.js`), lines)  / scaleTime
          , parseProblem(new RegExp(`wasm/${probNumber}/main\\.js`), lines)  / scaleTime
          , parseProblem(new RegExp(`js/${probNumber}/main\\.js`), lines)  / scaleTime
        ],
        backgroundColor: [
          "rgb(107, 52, 235)"
          , "rgb(53, 224, 230)"
          , "rgb(245, 160, 2)"
          , "rgb(237, 5, 67)"
          , "rgb(255, 215, 0)"
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
