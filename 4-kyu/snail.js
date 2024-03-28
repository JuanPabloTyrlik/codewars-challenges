// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

// const snail = (matrix) => {
//   const path = [];

//   if (!matrix?.[0]?.length) {
//     return path;
//   }

//   const boundaries = {
//     top: 0,
//     left: 0,
//     right: matrix.length - 1,
//     bottom: matrix.length - 1,
//   };

//   while (
//     boundaries.top <= boundaries.bottom &&
//     boundaries.left <= boundaries.right
//   ) {
//     for (let i = boundaries.top; i <= boundaries.right; i++) {
//       path.push(matrix[boundaries.top][i]);
//     }
//     boundaries.top += 1;

//     for (let i = boundaries.top; i <= boundaries.bottom; i++) {
//       path.push(matrix[i][boundaries.right]);
//     }
//     boundaries.right -= 1;

//     for (let i = boundaries.right; i >= boundaries.left; i--) {
//       path.push(matrix[boundaries.bottom][i]);
//     }
//     boundaries.bottom -= 1;

//     for (let i = boundaries.bottom; i >= boundaries.top; i--) {
//       path.push(matrix[i][boundaries.left]);
//     }
//     boundaries.left += 1;
//   }

//   return path;
// };

const snail = (matrix) => {
  const path = [];
  while (matrix.length) {
    // Traverse top from left to right
    path.push(...matrix.shift());
    // Traverse right from top to bottom
    matrix.map((row) => path.push(row.pop()));
    // Invert resulting matrix
    matrix.reverse().map((row) => row.reverse());
  }
  return path;
};

console.log(snail([[]]), []);
console.log(snail([[1]]), [1]);
console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [1, 2, 3, 6, 9, 8, 7, 4, 5]
);
