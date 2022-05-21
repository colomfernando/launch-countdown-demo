import React from 'react';
import Styles from './styles';

export interface PropsCounterCard {
  value: number;
  label: string;
}

const CounterCard: React.FC<PropsCounterCard> = ({
  value,
  label,
  ...props
}) => {
  return (
    <Styles.Wrapper {...props}>
      <Styles.Inner>
        <Styles.Value>{value < 10 ? `0${value}` : value}</Styles.Value>
      </Styles.Inner>
      <Styles.Label>{label}</Styles.Label>
    </Styles.Wrapper>
  );
};

export default CounterCard;
