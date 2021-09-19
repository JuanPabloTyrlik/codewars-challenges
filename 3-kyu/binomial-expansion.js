// https://www.codewars.com/kata/540d0fdd3b6532e5c3000b5b

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

const expand = (expr) => {
  let [, a, x, b, n] = /^\((-?\d*)(\w)([+-]?\d+)\)\^(\d+)$/.exec(expr);
  a = !a ? 1 : a === '-' ? -1 : +a;
  b = +b;
  n = +n;

  if (!n) return '1';
  if (!a) return `${b ** n}`;
  if (!b) return `${a === 1 ? '' : a ** n}${x}${n !== 1 ? `^${n}` : ''}`;
  if (n === 1) return /^\((-?\d*\w[+-]?\d+)\)/.exec(expr)[1];

  let expansion = '';
  const pascalCoef = pascal(n + 1)[n];
  for (let i = 0; i < pascalCoef.length; i++) {
    let n1 = pascalCoef[i] * a ** (n - i) * b ** i;
    const exp = n - i;
    const x1 = exp > 1 ? `${x}^${exp}` : exp === 1 ? `${x}` : '';
    const sign = n1 > 0 && i ? '+' : '';
    n1 = x1 && n1 === 1 ? '' : n1 === -1 && x1 ? '-' : n1;
    expansion += `${sign}${n1}${x1}`;
  }
  return expansion;
};

console.log(expand('(x+0)^1'), 'x');
console.log(expand('(x+1)^2'), 'x^2+2x+1');
console.log(expand('(p-1)^3'), 'p^3-3p^2+3p-1');
console.log(
  expand('(2f+4)^6'),
  '64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096'
);
console.log(expand('(-2a-4)^0'), '1');
console.log(expand('(-12t+43)^2'), '144t^2-1032t+1849');
console.log(expand('(r+0)^203'), 'r^203');
console.log(expand('(-x-1)^2'), 'x^2+2x+1');
