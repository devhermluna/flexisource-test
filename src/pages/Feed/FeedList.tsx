import React, { useState, useEffect, useCallback } from 'react';
import FeedItem from '../../components/FeedItem/FeedItem';
import FeedItemLoader from '../../components/FeedItem/FeedItemLoader';
import FeedAPI from '../../services/feed';
import { StyledItemContainer } from '../../styled-components/FeedList.styled';

const Feed = () => {
  const [items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const getItems = useCallback(async () => {
    try {
      const response = await FeedAPI.browse();

      setItems(response);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <StyledItemContainer data-testid="feedlist-container">
      {items.map(item => (
        <FeedItem key={item.id} {...item} />
      ))}
      {isFetching &&
        [0, 1, 2, 3].map((item: number) => <FeedItemLoader key={item} />)}
    </StyledItemContainer>
  );
};

export default Feed;
