import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import FeedList from './Feed/FeedList';
import FeedItem from './Feed/FeedItem';
import MenuContainer from '../components/Menu/MenuContainer';
import { TOPBAR_MENU, FOOTER_MENU } from '../constants/Menu';
import { ITEMS_ROUTE, ITEM_ROUTE } from '../constants/Routes';
import { BACKGROUND } from '../constants/Colors';

const BaseStyle = createGlobalStyle`
  body {
    background: ${BACKGROUND};
  }
`;

const AppContainer = styled.div`
  padding: 30px;
  max-width: 1460px;
  margin: 0 auto;
`;

const TopbarMenu = styled.div`
  margin-bottom: 60px;
`;

const FooterMenu = styled.div`
  border-top: 1px solid black;
  padding-top: 20px;
  margin-top: 30px;
`;

function App() {
  return (
    <Router>
      <BaseStyle />
      <AppContainer>
        <TopbarMenu>
          <MenuContainer items={TOPBAR_MENU} logoHeight={17} />
        </TopbarMenu>
        <Switch>
          <Route path={ITEM_ROUTE}>
            <FeedItem />
          </Route>
          <Route path={ITEMS_ROUTE}>
            <FeedList />
          </Route>
          <Redirect to={ITEMS_ROUTE} />
        </Switch>
        <FooterMenu>
          <MenuContainer items={FOOTER_MENU} logoHeight={14} />
        </FooterMenu>
      </AppContainer>
    </Router>
  );
}

export default App;
