import client from './client';

const resource: string = 'feed';

export default {
  ...client(resource)
};
