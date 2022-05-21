import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import Title from 'components/Title';
import MainLayout from 'layouts/MainLayout';
import Counter from 'components/Counter';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <Title title="WE ARE LAUNCHING SOON" />
        <Counter />
      </MainLayout>
    </>
  );
};

export default App;
