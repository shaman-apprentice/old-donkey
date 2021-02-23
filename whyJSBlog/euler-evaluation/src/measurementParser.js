/** @return number - average taken time for problem  */
export const parseProblem = (headingLineRegExpForProblem, lines) => {
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
export const parseProblemsForLanguage = (headingRegExpBuilder, start, end, lines) => {
  const data = []
  for (let i = start; i <= end; i++) 
    data.push(parseProblem(headingRegExpBuilder(String(i).padStart(2, "0")), lines))

  return data.map((time, i) => ({x: i + 1, y: time}))
}
