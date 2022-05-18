import React from 'react';

import {
  AccessPass as AccessPassView,
  AlphaClass as AlphaClassView,
  BoardingPass as BoardingPassView
} from 'views';

const routes = [
  {
    path: '/accesspass',
    renderer: (params = {}) => <AccessPassView {...params} />,
  },
  {
    path: '/boardingpass',
    renderer: (params = {}) => <BoardingPassView {...params} />,
  },
  {
    path: '/',
    renderer: (params = {}) => <AccessPassView {...params} />,
  },
];

export default routes;
