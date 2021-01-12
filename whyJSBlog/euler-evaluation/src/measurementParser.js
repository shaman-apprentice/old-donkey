import { measurements1To10 } from "./measurements.js"

const measurement1To10Lines = measurements1To10.split("\n")

/** @return number - average taken time for problem  */
const parseProblem = (headingLineRegExpForProblem) => {
  const indexOfProblemHeading = getStartIndex()
  const endIndex = getEndIndex()

  const sum = measurement1To10Lines
    .slice(indexOfProblemHeading, endIndex)
    .reduce((acc, line) => acc + parseFloat(line), 0)

  return sum / (endIndex - indexOfProblemHeading)

  function getStartIndex() {
    return measurement1To10Lines.findIndex(line =>
      line.match(headingLineRegExpForProblem) !== null) + 1
  }

  function getEndIndex() {
    const indexOfNextProblem = measurement1To10Lines.findIndex((line, i) =>
    i > indexOfProblemHeading && line.startsWith("Running "))
    return indexOfNextProblem === -1 ? measurement1To10Lines.length : indexOfNextProblem
  }
}

/** @param headingRegExpBuilder - function taken number as parameter and returning a RegExp matching problem's heading
 *  @return [] - average taken time per problem, mapped to x and y axes
 */
const parseProblemsForLanguage = (headingRegExpBuilder, start, end) => {
  const data = []
  for (let i = start; i <= end; i++) 
    data.push(parseProblem(headingRegExpBuilder(i)))

  return data.map((time, i) => ({x: i + 1, y: time}))
}

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
