import React from 'react';
import { Box } from '@mui/material';

import { Header, Companies, Service, Portfolio, Pricing } from './';

const Home = () => (
    <Box>
        <Header />
        <Companies />
        <Service />
        <Portfolio />
        <Pricing />
    </Box>
)

export default Home