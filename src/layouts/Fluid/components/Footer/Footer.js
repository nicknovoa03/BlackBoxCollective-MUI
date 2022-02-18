import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import logoBlack from '../../../../BlackBoxSamples/logoBlack-Box-Collective-Black-Gold.png';
import logoGold from '../../../../BlackBoxSamples/logoBlack-Box-Collective-White-Gold.png';


const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="Black Box Collective"
            width={150}
          >
            <Box
              component={'img'}
              src={
                mode === 'light'
                  ? logoBlack
                  : logoGold
              }
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                title='Discord'
                underline="none"
                component="a"
                href="https://discord.gg/maAd9MDm"
                color="text.primary"
                variant={'subtitle2'}
              >
                Discord
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                title='OpenSea'
                underline="none"
                component="a"
                href="https://opensea.io/collection/black-box-collective-access-pass"
                color="text.primary"
                variant={'subtitle2'}
              >
                OpenSea
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                title='Home'
                underline="none"
                component="a"
                href="https://blackboxcollective.io/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Home
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; Black Box Collective, 2022. All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
