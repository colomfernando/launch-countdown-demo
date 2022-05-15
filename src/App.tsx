import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import Title from 'components/Title';
import MainLayout from 'layouts/MainLayout';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <Title title="WE ARE LAUNCHING SOON" />
      </MainLayout>
    </>
  );
};

export default App;
