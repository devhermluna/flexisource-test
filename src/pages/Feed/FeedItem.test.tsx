import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FeedItem from './FeedItem';
import { feedItems, getFirstFeedItem } from '../../__mocks__/MockFeedItemApi';

afterEach(cleanup);

test('Render FeedListItem', async () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <FeedItem />
    </MemoryRouter>
  );
  const feedContainer = getByTestId('feed-detailed-item');

  expect(feedContainer).toBeInTheDocument();
});

test('should fetch feed-item', async () => {
  const { data, status } = await getFirstFeedItem();

  expect(status).toBe(200);
  expect(data.id).toBe(feedItems[0].id);
});
