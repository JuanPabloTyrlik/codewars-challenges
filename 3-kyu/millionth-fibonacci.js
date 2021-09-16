// https://www.codewars.com/kata/53d40c1e2f13e331fc000c26

// https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.4
// https://mathworld.wolfram.com/SuccessiveSquareMethod.html
// https://www.cfm.brown.edu/people/dobrush/cs52/Mathematica/Part7/fibo.html
// https://en.wikipedia.org/wiki/Exponentiation_by_squaring
// http://blog.richardkiss.com/?p=398

const multiplyMatrix = (a, b) => {
  const c = new Array(a.length).fill().map(() => new Array(a.length).fill(0n));

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      for (let k = 0; k < a.length; k++) {
        c[i][j] += a[i][k] * b[k][j];
      }
    }
  }

  return c;
};

const powMatrix = (n) => {
  const Q = [
    [1n, 1n],
    [1n, 0n],
  ];

  const E = [
    [1n, 0n],
    [0n, 1n],
  ];

  if (n === 1n) return Q;
  if (n === 0n) return E;

  let M = powMatrix(n >> 1n);
  M = multiplyMatrix(M, M);
  if (n % 2n) {
    M = multiplyMatrix(M, Q);
  }
  return M;
};

const fib = (n) => {
  n = BigInt(n);

  const absN = n > 0n ? n : -n;
  const sign = n < 0n ? (-1n) ** ((n % 2n) + 1n) : 1n;

  return sign * powMatrix(absN)[0][1];
};

// Using Fast Doubling Identities http://blog.richardkiss.com/?p=398
// fib(2n) = fib(n) * (2 * fib(n+1) - fib(n))
// fib(2n+1) = fib(n)^2 + fib(n+1)^2
const fibOptimized = (n) =>
  ((fn) => (n < 0 && !(n % 2) ? -fn(Math.abs(n))[0] : fn(Math.abs(n))[0]))(
    function fn(n) {
      if (!n) return [0n, 1n]; // Base Case: When n = 0, fib(n)=0, fib(1)=1
      const [_n, _n1] = fn(n >> 1); // Recurse for i + 2 levels, where 2^i <= n. The last 2 levels are for n = [0, 1]
      const _2n = _n * (2n * _n1 - _n); // Calculates fib(2n) = fib(n) * (2 * fib(n+1) - fib(n))
      const _2n1 = _n ** 2n + _n1 ** 2n; // Calculates fib(2n+1) = fib(n)^2 + fib(n+1)^2
      return n % 2 ? [_2n1, _2n + _2n1] : [_2n, _2n1]; // If n is odd, [fib(2n+1), fib(2n) + fib(2n+1)], otherwise [fib(2n), fib(2n+1)]
    }
  );

console.log('fib 0', fib(0), 0n);
console.log('fib 1', fib(1), 1n);
console.log('fib 2', fib(2), 1n);
console.log('fib 3', fib(3), 2n);
console.log('fib 4', fib(4), 3n);
console.log('fib 5', fib(5), 5n);
console.log('fib 6', fib(6), 8n);
console.log('fib -5', fib(-5), 5n);
console.log('fib -6', fib(-6), -8n);
console.log('fib 100', fib(100), 354224848179261915075n);
console.log('fib 2000000', fib(2000000));

// console.log('fibOptimized 0', fibOptimized(0), 0n);
// console.log('fibOptimized 1', fibOptimized(1), 1n);
// console.log('fibOptimized 2', fibOptimized(2), 1n);
// console.log('fibOptimized 3', fibOptimized(3), 2n);
// console.log('fibOptimized 4', fibOptimized(4), 3n);
// console.log('fibOptimized 5', fibOptimized(5), 5n);
// console.log('fibOptimized 6', fibOptimized(6), 8n);
// console.log('fibOptimized -5', fibOptimized(-5), 5n);
// console.log('fibOptimized -6', fibOptimized(-6), -8n);
// console.log('fibOptimized 100', fibOptimized(100), 354224848179261915075n);
// console.log('fibOptimized 2000000', fibOptimized(2000000));

// for (let i = 0; i < 100; i++) {
//   fibOptimized(0);
//   fibOptimized(1);
//   fibOptimized(2);
//   fibOptimized(3);
//   fibOptimized(4);
//   fibOptimized(5);
//   fibOptimized(6);
//   fibOptimized(-5);
//   fibOptimized(-6);
//   fibOptimized(100);
//   fibOptimized(1000000);
// }

// for (let i = 0; i < 100; i++) {
//   fib(0);
//   fib(1);
//   fib(2);
//   fib(3);
//   fib(4);
//   fib(5);
//   fib(6);
//   fib(-5);
//   fib(-6);
//   fib(100);
//   fib(1000000);
// }
