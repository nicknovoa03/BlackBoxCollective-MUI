/* eslint-disable react/no-unescaped-entities */
import { ethers } from 'ethers';
import { React, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled, useTheme } from '@mui/material/styles';


import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

import MintBackground from '../../../../BlackBoxSamples/MintBackground.GIF';
import logo from '../../../../BlackBoxSamples/logoGold.png';
import { contractAddr, contract } from '../../../../contracts/Contract';

const validationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  password: yup
    .string()
    .required('Please specify your password')
    .min(8, 'The password should have at minimum length of 8'),
});

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  }
];

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://www.blackboxcollective.io/'>
        Black Box Collective
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Form = ({colorInvert = false}) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const [mintAmount, setMintAmount] = useState(1);
  const [wallet, setWallet] = useState();
  const [web3, setWeb3] = useState();

  const etherscanLink = 'https://etherscan.io/address/';

  const WalletAddress = () => {
    const link = etherscanLink.concat(wallet);
    return (
      <Typography align='center'>
        <Link color='inherit' href={link}>
          {wallet}
        </Link>
      </Typography>
    );
  }

  const ContractAddress = () => {
    const link = etherscanLink.concat(contractAddr);
    return (
      <Typography>
        <Link color='inherit' href={link}>
          {contractAddr}
        </Link>
      </Typography>
    );
  }

  const providerOptions = {
    injected: {
      package: null
    },
    walletconnect: {
      package: WalletConnectProvider,
      network: 'ethereum',
      options: {
        infuraId: 'bad8cc770bef49dc88683bf2290205c8' // required
      }
    }
  };

  const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions
  });

  async function connect() {
    try {
      let provider;
      provider = await web3Modal.connect();
      let web3 = new Web3(provider);
      setWeb3(web3);
      web3.eth.getAccounts().then(async (addr) => {
        setWallet(addr[0].toLocaleLowerCase());
      });
    } catch (e) {
      console.log(e);
      return;
    }
  }

  async function mint() {
    const price = 1.95 * mintAmount;
    const mintable_price = price.toString();

    const tx = {
      from: wallet,
      to: contractAddr,
      value: ethers.utils.parseEther(mintable_price)['_hex'],
      gas: 200000 * mintAmount,
      data: contract.methods.mintAccessPass(mintAmount).encodeABI(),
    };

    const createTransaction = await web3.eth.sendTransaction(tx);
  }

  const handleSlider = ({ event, value }) => {

  }
  const Web3Button = styled(Button)({
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'white',
    color: 'black',
    fontFamily: [
      'Roboto',
    ].join(','),
    '&:hover': {
      backgroundColor: '#fff',
      borderColor: 'rgba(255, 255, 255, 0.08)',
      boxShadow: 'rgba(255, 255, 255, 0.16)',
    },
    '&:active': {
      boxShadow: '#fff',
      backgroundColor: '#fff',
      borderColor: '#fff',
    }
  });

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Box marginBottom={3}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Black Box Collective Access Pass
        </Typography>

      </Box>
      <Grid container spacing={1}
      >
        <Grid item xs={12} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Mint Amount
          </Typography>
          <Slider
            onChangeCommitted={(events, value) => handleSlider(events, value)}
            aria-label='Mint Amount'
            defaultValue={1}
            step={1}
            marks={marks}
            min={1}
            max={2}
            sx={{
              color: 'text.primary',
              mb: 4
            }}
          />
          {wallet &&
            <Web3Button
              fullWidth
              variant='contained'
              onClick={mint}
            >
              Mint
            </Web3Button>
          } {!wallet &&
            <Web3Button
              fullWidth
              variant='contained'
              onClick={() => connect()}
            >
              Connect
            </Web3Button>
          }
        </Grid>
        <Grid item xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Typography
            component='h4'
            variant='Subtitle'
            color={
              mode ==='light' && !colorInvert
                ? 'Black'
                : 'White'
            }
            align='center'
            display='flex'
            justifyContent='center'
            sx={{
              mt: 2
            }}
          >
            Connected Wallet:
          </Typography>
          <WalletAddress />

          <Typography
            component='h4'
            variant='Subtitle'
            color={
              mode === 'light' && !colorInvert
                ? 'Black'
                : 'White'
            }
            align='center'
            display='flex'
            justifyContent='center'
            sx={{
              mt: 1
            }}
          >
            Contract Address:
          </Typography>
          <ContractAddress />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
