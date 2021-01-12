import measurements1To10 from "./measurements/1To10.js"
import measurementOfProb70 from "./measurements/70.js"
import measurementOfProb00 from "./measurements/00.js"

const measurementOfProbs1To10Lines = measurements1To10.split("\n")
export const measurementOfProb70Lines = measurementOfProb70.split("\n")
export const measurementOfProb00Lines = measurementOfProb00.split("\n")

/** @return number - average taken time for problem  */
const parseProblem = (headingLineRegExpForProblem, lines=measurementOfProbs1To10Lines) => {
  const indexOfProblemHeading = getStartIndex()
  const endIndex = getEndIndex()

  const sum = lines
    .slice(indexOfProblemHeading, endIndex)
    .reduce((acc, line) => acc + parseFloat(line), 0)

  return sum / (endIndex - indexOfProblemHeading)

  function getStartIndex() {
    return lines.findIndex(line =>
      line.match(headingLineRegExpForProblem) !== null) + 1
  }

  function getEndIndex() {
    const indexOfNextProblem = lines.findIndex((line, i) =>
    i > indexOfProblemHeading && line.startsWith("Running "))
    return indexOfNextProblem === -1 ? lines.length : indexOfNextProblem
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
