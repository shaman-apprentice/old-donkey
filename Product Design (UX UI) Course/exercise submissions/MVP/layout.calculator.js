const width = parseInt(process.argv[2]); // 1200
const gutter = parseInt(process.argv[3]); // 32

function calculateBoxWidth(columns) {
  return (width - 2 * 32 - (columns - 1) * 32) / columns;
}

console.log(`Width: ${width}, Gutter: ${gutter}`);
console.log(calculateBoxWidth(2));
console.log(calculateBoxWidth(3));
console.log(calculateBoxWidth(4));
