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
        <Container>
          <Box>
            <Box>
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
