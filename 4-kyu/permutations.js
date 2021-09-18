// https://www.codewars.com/kata/5254ca2719453dcc0b00027d

const permutations = (word) => {
  if (!word.length) return [''];

  let combinations = [];
  for (const char of word) {
    const subset = word.replace(char, '');
    const combination = permutations(subset).map(
      (combination) => char + combination
    );
    combinations.push(...combination);
  }

  return [...new Set(combinations)];
};

// console.log(permutations('a'), ['a']);
// console.log(permutations('ab').sort(), ['ab', 'ba']);
console.log(permutations('aabb').sort(), [
  'aabb',
  'abab',
  'abba',
  'baab',
  'baba',
  'bbaa',
]);
