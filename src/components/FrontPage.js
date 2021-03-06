import React from 'react';

import Auth from './Auth';
import MakerLogFront from './MakerLogFront';

// Lib imports
import makerConfig from '../config/makerlog';
import compliceConfig from '../config/complice';

const FrontPage = () => (
  <div>
    <Auth name='makerlog' config={ makerConfig } />
    <Auth name='complice' config={ compliceConfig } />
    <MakerLogFront />
  </div>
);

export default FrontPage;
