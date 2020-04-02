import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { within } from '@testing-library/dom';
import FeedList from './FeedList';
import { feedItems, getAllFeedItems } from '../../__mocks__/MockFeedItemApi';

afterEach(cleanup);

test('Render FeedListComponent', () => {
  const { getByTestId } = render(<FeedList />);
  const feedlistContainer = getByTestId('feedlist-container');

  expect(feedlistContainer).toBeInTheDocument();
});

test('should fetch feed-items', async () => {
  const { data, status } = await getAllFeedItems();

  expect(status).toBe(200);
  expect(data.length).toBe(feedItems.length);
});

test('Render FeedListItem', async () => {
  const { data } = await getAllFeedItems();
  const { getByTestId } = render(<FeedList />);
  const feedlistContainer = getByTestId('feedlist-container');
  const feedInListContainer = within(feedlistContainer).getAllByTestId(
    'feed-list-item'
  );

  expect(feedInListContainer.length).toEqual(data.length);
});
