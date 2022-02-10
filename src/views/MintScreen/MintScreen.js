import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Fluid';
import Container from 'components/Container';
import { Form } from './components';

import logoBlack from '../../BlackBoxSamples/logoBlack-Box-Collective-Black.png';
import logoGold from '../../BlackBoxSamples/logoBlack-Box-Collective-White-Gold.png';
//import logoOnlyGold from '../../BlackBoxSamples/logoBlack-Box-Collective-Dark.png';
//import logoOnlyBlack from '../../BlackBoxSamples/logoBlack-Box-Collective-Black.png';



const MintScreen = ({colorInvert = false}) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  return (
    <Main>
      <Box 
        sx={{
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
      >
        <Container paddingX={0} paddingY={0} maxWidth={{ sm: 375, md: 800 }}>
          <Box
            display={'flex'}
            flexDirection={{ xs: 'column', md: 'row' }}
            position={'relative'}
          >
            <Box
              display={'flex'}
              alignItems={'center'}
            >
              <Container>
                <Form />
              </Container>
            </Box>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

MintScreen.propTypes = {
  colorInvert: PropTypes.bool,
};

export default MintScreen;
