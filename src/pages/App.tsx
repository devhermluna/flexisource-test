import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BaseStyledGlobal } from '../styled-components/base.styled';
import DefaultLayout from '../components/Layout/default';

function App() {
  return (
    <Router>
      <BaseStyledGlobal />
      <DefaultLayout />
    </Router>
  );
}

export default App;
