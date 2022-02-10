import React from 'react';
import PropTypes from 'prop-types';
import Main from 'layouts/Fluid';
import Container from 'components/Container';
import Box from '@mui/material/Box';
import { Form } from './components';

const MintScreen = () => {
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
