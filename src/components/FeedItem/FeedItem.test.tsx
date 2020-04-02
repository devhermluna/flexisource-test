import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import FeedItem from './FeedItem';
import { feedItems } from '../../__mocks__/request';

afterEach(cleanup);

test('should have menu item container', async () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <FeedItem {...feedItems[0]} />
    </MemoryRouter>
  );
  const feedItemContainer = getByTestId('feed-list-item');

  expect(feedItemContainer).toBeInTheDocument();
});
