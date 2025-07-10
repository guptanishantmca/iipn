import React from 'react';
import Header from './components/Header';
import Page from './components/Page';
const App = () => {
  return (
    <div>
       
      <Header />
      <Page pageId={6} />
    </div>
  );
};

export default App;
