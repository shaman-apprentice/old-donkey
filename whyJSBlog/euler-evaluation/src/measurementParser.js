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
export const parseProblemsForLanguage = (headingRegExpBuilder, start, end) => {
  const data = []
  for (let i = start; i <= end; i++) {
    // if (i === 5 || i === 10)
    //   continue
    data.push(parseProblem(headingRegExpBuilder(i)))
  }

  return data.map((time, i) => ({x: i + 1, y: time}))
}

console.log(parseProblem((number) => new RegExp(`${number}/main.js`)))
