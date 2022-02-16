import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Page from './components/Page';
import TagManager from 'react-gtm-module';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';

const App = () => {
  useEffect (() => {
    TagManager.initialize({gtmId : "GTM-PZ44STN"});
  });
  return (
    <Page>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Page>
  );
};

export default App;
