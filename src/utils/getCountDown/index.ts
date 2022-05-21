/**
 * It takes two dates, calculates the difference between them in milliseconds, and then converts that
 * difference into days, hours, minutes, and seconds
 * @param {Date} initialDate - The date you want to start counting down from.
 * @param {Date} endDate - The date you want to count down to.
 * @returns An object with the days, hours, minutes, and seconds between the two dates.
 */
const getCountDown = (initialDate: Date, endDate: Date) => {
  const difference = endDate.getTime() - initialDate.getTime();

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export default getCountDown;
