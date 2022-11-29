import React from 'react';
import styled from 'styled-components';
import { Router, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import history from '../history';

const MainContainer = styled.div`
  width: 100%;
`;
const App = () => {
  return (
    <MainContainer>
      <Router history={history}>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/shop" component={Shop} />
      </Router>
    </MainContainer>
  );
};

export default App;
