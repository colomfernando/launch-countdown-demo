/**
 * Get the current date, multiply the number of days by the number of milliseconds in a day, and add
 * that to the current date.
 * @param {number} daysToAdd - number - the number of days to add to the current date
 * @returns A function that takes a number of days and returns a date object that is the current date
 * plus the number of days passed in.
 */
const getDeadLine = (daysToAdd: number): Date => {
  const now = new Date();

  const deadLineMilliseconds = daysToAdd * 24 * 60 * 60 * 1000;

  return new Date(now.getTime() + deadLineMilliseconds);
};

export default getDeadLine;
