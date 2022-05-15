import React from 'react';
import Styles from './styles';

export interface PropsTitle {
  title: string;
}

const Title: React.FC<PropsTitle> = ({ title }) => {
  return <Styles.Title>{title}</Styles.Title>;
};

export default Title;
