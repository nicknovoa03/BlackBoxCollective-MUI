import React from 'react';

import {
  SigninCover as SigninCoverVew,
  MintScreen as MintScreenView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <SigninCoverVew {...params} />,
  },
  {
    path: '/home',
    renderer: (params = {}) => <MintScreenView {...params} />,
  }
];

export default routes;
