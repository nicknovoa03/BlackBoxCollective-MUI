import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Main from 'layouts/Fluid';
import Container from 'components/Container';
import {
  Hero
} from './components';

const Startup = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
    </Main>
  );
};

export default Startup;
