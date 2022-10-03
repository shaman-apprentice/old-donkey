export function releaseValue2ChartData(values) {
  const fstValue = { x: 1, y: values[0] }
  return values.slice(1).reduce((acc, v, i) => {
    acc[i + 1] = { x: i + 2, y: acc[i].y + v }
    return acc
  }, [fstValue])
}