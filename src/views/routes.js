import React from 'react';

import {
  SigninCover as SigninCoverVew,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <SigninCoverVew {...params} />,
  },
];

export default routes;
