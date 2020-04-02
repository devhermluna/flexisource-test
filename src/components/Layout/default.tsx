/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import {
  Switch,
  Redirect,
  Route,
  useLocation
} from 'react-router-dom';
import FeedList from '../../pages/Feed/FeedList';
import FeedItem from '../../pages/Feed/FeedItem';
import MenuContainer from '../Menu/MenuContainer';
import { TOPBAR_MENU, FOOTER_MENU } from '../../constants/Menu';
import { ITEMS_ROUTE, ITEM_ROUTE } from '../../constants/Routes';
import {
  AppContainer,
  TopbarMenu,
  FooterMenu
} from '../../styled-components/App.styled';

const defaultLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])


  return (
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
  )
};

export default defaultLayout;
