import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import FeedList from './Feed/FeedList';
import FeedItem from './Feed/FeedItem';
import MenuContainer from '../components/Menu/MenuContainer';
import { TOPBAR_MENU, FOOTER_MENU } from '../constants/Menu';
import { ITEMS_ROUTE, ITEM_ROUTE } from '../constants/Routes';
import { BaseStyledGlobal } from '../styled-components/base.styled';
import {
  AppContainer,
  TopbarMenu,
  FooterMenu
} from '../styled-components/App.styled';

function App() {
  return (
    <Router>
      <BaseStyledGlobal />
      <AppContainer data-testid="app-container">
        <TopbarMenu data-testid="topbar">
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
        <FooterMenu data-testid="footer">
          <MenuContainer items={FOOTER_MENU} logoHeight={14} />
        </FooterMenu>
      </AppContainer>
    </Router>
  );
}

export default App;
