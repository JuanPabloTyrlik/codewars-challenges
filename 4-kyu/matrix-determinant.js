// https://www.codewars.com/kata/52a382ee44408cea2500074c

const determinant = (matrix, memo = {}) => {
  const key = `${matrix}`;

  if (key in memo) return memo[key];
  if (matrix[0].length === 1) return matrix[0][0];

  let total = 0;

  for (let i = 0; i < matrix[0].length; i++) {
    const subMatrix = matrix
      .filter((_, index) => index !== 0)
      .map((array) => array.filter((_, index) => index !== i));
    total += Math.pow(-1, i) * matrix[0][i] * determinant(subMatrix, memo);
  }

  memo[key] = total;
  return total;
};

console.log(determinant([[1]]), 1);
console.log(
  determinant([
    [1, 3],
    [2, 5],
  ]),
  -1
);
console.log(
  determinant([
    [2, 5, 3],
    [1, -2, -1],
    [1, 3, 4],
  ]),
  -20
);
console.log(
  determinant([
    [1, 3, 5, 9],
    [1, 3, 1, 7],
    [4, 3, 9, 7],
    [5, 2, 0, 9],
  ]),
  -376
);

const matrix15x15 = [
  [3, 10, 5, 1, 2, 5, 8, 1, 9, 6, 5, 3, 6, 5, 3],
  [6, 5, 10, 3, 3, 9, 6, 1, 9, 2, 1, 4, 1, 1, 10],
  [10, 6, 9, 2, 7, 2, 9, 10, 8, 9, 4, 6, 7, 6, 7],
  [2, 5, 10, 5, 6, 6, 5, 1, 7, 6, 9, 1, 5, 9, 4],
  [1, 8, 8, 1, 6, 2, 4, 8, 4, 6, 2, 8, 6, 8, 9],
  [1, 3, 10, 5, 2, 5, 5, 4, 7, 5, 7, 4, 5, 8, 4],
  [9, 10, 4, 1, 8, 7, 1, 2, 4, 6, 8, 1, 10, 7, 7],
  [8, 3, 7, 4, 8, 5, 3, 5, 5, 1, 5, 3, 6, 7, 1],
  [6, 10, 7, 2, 5, 6, 3, 3, 8, 3, 6, 3, 5, 3, 1],
  [10, 3, 1, 6, 8, 10, 7, 2, 1, 4, 8, 3, 5, 1, 5],
  [6, 7, 10, 5, 10, 3, 9, 10, 4, 7, 1, 5, 9, 5, 5],
  [2, 4, 6, 3, 7, 9, 8, 2, 4, 8, 2, 4, 2, 2, 9],
  [2, 10, 10, 3, 5, 7, 9, 3, 5, 9, 9, 5, 9, 6, 2],
  [4, 5, 7, 3, 10, 10, 10, 3, 6, 6, 9, 4, 2, 4, 7],
  [8, 9, 3, 4, 1, 3, 3, 5, 1, 7, 1, 6, 7, 2, 7],
];

console.log(determinant(matrix15x15), 2734135713549);
