/* eslint-disable react/no-unescaped-entities */
import { ethers } from 'ethers';
import { React, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Slider from '@mui/material/Slider';
import { styled, useTheme } from '@mui/material/styles';

import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { contractAddr, contract } from '../../../../contracts/AccessPassContract';

import AccessPassLogo from '../../../../BlackBoxSamples/ACCESS_PASS_NFT.svg';

const Form = ({ colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const [mintAmount, setMintAmount] = useState(1);
  const [wallet, setWallet] = useState();
  const [web3, setWeb3] = useState();

  const etherscanLink = 'https://etherscan.io/address/';

  const WalletAddress = () => {
    const link = etherscanLink.concat(wallet);
    var displayWallet;
    if (wallet !== undefined) {
      var catWallet = String(wallet);
      displayWallet = catWallet.substring(0, 9) + "..." + catWallet.substring(catWallet.length - 9, catWallet.length);
    }
    else {
      displayWallet = 'Unconnected'
    }
    return (
      <Typography align='center'>
        <Link color='inherit' href={link}>
          {displayWallet}
        </Link>
      </Typography>
    );
  }

  const ContractAddress = () => {
    const link = etherscanLink.concat(contractAddr);
    var catAddr = String(contractAddr);
    var displayAddr = catAddr.substring(0, 9) + "..." + catAddr.substring(catAddr.length - 9, catAddr.length);
    return (
      <Typography>
        <Link color='inherit' href={link}>
          {displayAddr}
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

  async function testMint() {
    const price = 1 * mintAmount;
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

  const handleChange = (event) => {
    setMintAmount(event.target.value);
  }

  function handleSlider(event, value) {
    event.preventDefault();
    setMintAmount(value);
  }

  const Web3Button = styled(Button)({
    maxWidth: '500px',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#dfdfdf',
    color: '#111',
    fontFamily: [
      'Roboto',
    ].join(','),
    '&:hover': {
      backgroundColor: '#ffffff',
      borderColor: 'rgba(255, 255, 255, 0.08)',
      boxShadow: 'rgba(255, 255, 255, 0.16)',
    },
    '&:active': {
      boxShadow: '#fff',
      backgroundColor: '#fff',
      borderColor: '#fff',
    }
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

  return (
    <Box>
      <Box marginBottom={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 0,
        }}>
        <Box
          component={LazyLoadImage}
          src={AccessPassLogo}
          height={{ xs: 1, lg: .75 }}
          width={{ xs: 1, lg: .75 }}
        />
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={12} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Grid item xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              mb: 3,
            }}>
            <Typography
              variant="h6"
              sx={{
                ml: 0,
                mr: 4,
                mb: 3.25,
                fontWeight: 400,
              }}
            >
              Minting Amount:
            </Typography>
            <Box sx={{ minWidth: 100 }}>
              <Slider
                onChangeCommitted={(events, value) => handleSlider(events, value)}
                aria-label="Mint Amount"
                defaultValue={1}
                step={1}
                marks={marks}
                min={1}
                max={2}
                sx={{
                  color: 'text.primary'
                }}
              />
            </Box>
          </Grid>
          {wallet &&
            <Web3Button
              fullWidth
              variant='contained'
              onClick={testMint}
            >
              Mint {mintAmount} for {1.95 * mintAmount} ETH
            </Web3Button>
          } {!wallet &&
            <Web3Button
              fullWidth
              variant='contained'
              onClick={() => connect()}
            >
              Connect Wallet
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
              mode === 'light' && !colorInvert
                ? 'Black'
                : 'White'
            }
            align='center'
            display='flex'
            justifyContent='center'
            sx={{
              mt: 3,
              mb: 2
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
              mt: 3,
              mb: 2
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
