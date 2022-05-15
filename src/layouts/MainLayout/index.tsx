import React from 'react';
import Styles from './styles';

const MainLayout: React.FC = ({ children }) => {
  return <Styles.Wrapper>{children}</Styles.Wrapper>;
};

export default MainLayout;
