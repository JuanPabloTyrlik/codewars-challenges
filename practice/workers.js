/**
 * There are N workers.
 * Each of them is available during some days of this month.
 * Find 2 workers with the maximum number of days in common.
 */

// Bitwise approach
const findWorkers = (workers) => {
  let best = {
    intersection: 0,
  };

  for (let i = 0; i < workers.length; i++) {
    let firstSchedule = 0;
    workers[i].schedule.forEach((day) => (firstSchedule |= 1 << day));
    for (let j = 0; j < workers.length; j++) {
      if (i === j) continue;
      let secondSchedule = 0;
      workers[j].schedule.forEach((day) => (secondSchedule |= 1 << day));
      const intersection = (firstSchedule & secondSchedule)
        .toString(2)
        .match(/1/g).length;
      if (intersection > best.intersection) {
        best = {
          intersection,
          workers: [workers[i].name, workers[j].name],
        };
      }
    }
  }

  return best;
};

console.log(
  findWorkers([
    {
      name: 'Juan',
      schedule: [2, 3, 5, 6, 8],
    },
    {
      name: 'Pedro',
      schedule: [1, 2, 10, 12, 14, 16],
    },
    {
      name: 'Pablo',
      schedule: [2, 4, 5, 8],
    },
  ]),
  {
    intersection: 3,
    workers: ['Juan', 'Pablo'],
  }
);
