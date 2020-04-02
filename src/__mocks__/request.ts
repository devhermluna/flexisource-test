import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import feed from './feed.json';

const mock = new MockAdapter(axios);

export const feedItems = feed;

export const getAllFeedItems = async () => {
  mock.onGet('/feed').replyOnce(200, feed);

  const response = await axios.get('/feed');
  return response;
};

export const getFirstFeedItem = async () => {
  mock.onGet('/feed').replyOnce(200, feed[0]);

  const response = await axios.get('/feed');
  return response;
};
