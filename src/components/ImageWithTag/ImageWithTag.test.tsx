import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ImageWithTag from './ImageWithTag';
import { feedItems } from '../../__mocks__/request';

afterEach(cleanup);

test('should have menu item container', async () => {
  const [item] = feedItems;
  const { getByTestId } = render(
    <ImageWithTag imageUrl={item.image} tag={item.tag} height={20} />
  );
  const imageWithTagContainer = getByTestId('image-with-tag-container');

  expect(imageWithTagContainer).toBeInTheDocument();
});
