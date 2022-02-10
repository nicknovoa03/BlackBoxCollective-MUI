import React from 'react';

import {
  MintScreen as MintScreenVew,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <MintScreenVew {...params} />,
  },
];

export default routes;
