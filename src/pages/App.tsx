import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import styled from 'styled-components';
import FeedList from './Feed/FeedList';
import FeedItem from './Feed/FeedItem';
import MenuContainer from '../components/Menu/MenuContainer';
import { TOPBAR_MENU, FOOTER_MENU } from '../constants/Menu';
import { ITEMS_ROUTE, ITEM_ROUTE } from '../constants/Routes';

const AppContainer = styled.div`
  padding: 30px 80px;
  max-width: 1260px;
  margin: 0 auto;
`;

const TopbarMenu = styled.div`
  margin-bottom: 30px;
`;

const FooterMenu = styled.div`
  border-top: 1px solid black;
  padding-top: 20px;
  margin-top: 30px;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <TopbarMenu>
          <MenuContainer items={TOPBAR_MENU} logoHeight={24} />
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
          <MenuContainer items={FOOTER_MENU} logoHeight={18} />
        </FooterMenu>
      </AppContainer>
    </Router>
  );
}

export default App;
