import React, { useState, useEffect } from 'react';
import getDeadLineDate from 'utils/getDeadLine';
import getCountDown from 'utils/getCountDown';
import Styles from './styles';

export interface Remain {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Counter: React.FC = () => {
  const [remain, setRemain] = useState<Remain>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const deadLine = getDeadLineDate(7);

  const countDown = () => {
    const dataRemain = getCountDown(new Date(), deadLine);

    setRemain(dataRemain);
  };

  useEffect(() => {
    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      countDown();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Styles.Wrapper>
      <Styles.Value value={Number(remain.days)} label="days" />
      <Styles.Value value={Number(remain.hours)} label="hours" />
      <Styles.Value value={Number(remain.minutes)} label="minutes" />
      <Styles.Value value={Number(remain.seconds)} label="days" />
    </Styles.Wrapper>
  );
};

export default Counter;
