import { measurements } from "./measurements01-10.js"

const measurementLines = measurements.split("\n")

/** @return number - average taken time for problem  */
const parseProblem = (headingLineRegExpForProblem) => {
  const indexOfProblemHeading = measurementLines.findIndex(line =>
    line.match(headingLineRegExpForProblem) !== null)
  const endIndex = measurementLines.findIndex((line, i) =>
    i > indexOfProblemHeading && line.startsWith("Running "))

  const sum = measurementLines
    .slice(indexOfProblemHeading + 1, endIndex)
    .reduce((acc, line) => acc + parseFloat(line), 0)

  return sum / (endIndex - indexOfProblemHeading)
}

/** @param headingRegExpBuilder - function taken number as parameter and returning a RegExp matching problem's heading
 *  @return [] - average taken time per problem, mapped to x and y axes
 */
const parseProblemsForLanguage = (headingRegExpBuilder, start, end) => {
  const data = []
  for (let i = start; i <= end; i++) {
    // if (i === 5 || i === 10)
    //   continue
    data.push(parseProblem(headingRegExpBuilder(i)))
  }

  return data.map((time, i) => ({x: i + 1, y: time}))
}

console.log(parseProblem((number) => new RegExp(`${number}/main.js`)))

export const createChartObjectForProb1To10 = () => ({
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [
      {
        label: 'C',
        data: parseProblemsForLanguage((number) => new RegExp(`${number}/main\\.exe`), 1, 10),
        borderColor: "rgb(205,133,63)",
      },
      {
        label: 'Java',
        data: parseProblemsForLanguage((number) => new RegExp(`${number}/Main\\.java`), 1, 10),
        borderColor: "rgb(255,0,0)",
      },
      {
        label: 'JavaScript',
        data: parseProblemsForLanguage((number) => new RegExp(`${number}/main\\.js`), 1, 10),
        borderColor: "rgb(255,215,0)",
      },
      {
        label: 'Python',
        data: parseProblemsForLanguage((number) => new RegExp(`python.*${number}\\.main`), 1, 10),
        borderColor: "rgb(75, 75, 192)",
      },
    ]
  },
  options: {
    title: { display: true, text: "1. All" },
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
          }
        }],
    },
    elements: {
      line: { fill: false }
    }
  }
})
