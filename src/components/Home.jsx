import React from 'react';
import { Box } from '@mui/material';

import { Header, Companies, Service, Portfolio, Pricing, Testimonials } from './';

const Home = () => (
    <Box>
        <Header />
        <Companies />
        <Service />
        <Portfolio />
        <Pricing />
        <Testimonials />
    </Box>
)

export default Home