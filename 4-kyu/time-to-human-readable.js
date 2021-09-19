// https://www.codewars.com/kata/52742f58faf5485cae000b9a

const formatDuration = (time) => {
  const unitsOfTime = {
    year: Math.floor(time / (60 * 60 * 24 * 365)),
    day: Math.floor(time / (60 * 60 * 24)) % 365,
    hour: Math.floor(time / (60 * 60)) % 24,
    minute: Math.floor(time / 60) % 60,
    second: time % 60,
  };

  const phrases = [];

  for (const unit in unitsOfTime) {
    const phrase = unit
      ? `${unitsOfTime[unit]} ${unit}${unitsOfTime[unit] > 1 ? 's' : ''}`
      : '';
    unitsOfTime[unit] && phrases.push(phrase);
  }

  if (!phrases.length) return 'now';

  return phrases.join(', ').replace(/, (\d+ \w+)*$/, ' and $1');
};

console.log(formatDuration(1), '1 second');
console.log(formatDuration(62), '1 minute and 2 seconds');
console.log(formatDuration(120), '2 minutes');
console.log(formatDuration(3600), '1 hour');
console.log(formatDuration(3662), '1 hour, 1 minute and 2 seconds');
