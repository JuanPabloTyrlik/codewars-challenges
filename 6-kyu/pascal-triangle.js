const pascal = (depth) => {
  const triangle = Array(depth)
    .fill()
    .map(() => []);
  triangle[0][0] = 1;
  for (let i = 1; i < depth; i++) {
    for (let j = 0; j < i; j++) {
      const prev = j - 1 >= 0 ? triangle[i - 1][j - 1] : 0;
      const next = triangle[i - 1][j];
      const num = prev + next;
      triangle[i][j] = num;
      if (j !== i - j) triangle[i][i - j] = num;
    }
  }
  return triangle;
};

// console.log(pascal(1), [[1]]);
console.log(pascal(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
