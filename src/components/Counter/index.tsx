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

type RemainKey = keyof Remain;

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

  const isRemainEnd = (data: Remain) => {
    const hasValues = Object.values(data).filter(Boolean);
    if (!hasValues.length) return true;
    return false;
  };

  useEffect(() => {
    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      countDown();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Styles.Wrapper>
      {!isRemainEnd(remain) &&
        Object.keys(remain).map((data) => (
          <Styles.Value
            key={data}
            value={remain[data as RemainKey]}
            label={data}
          />
        ))}
    </Styles.Wrapper>
  );
};

export default Counter;
