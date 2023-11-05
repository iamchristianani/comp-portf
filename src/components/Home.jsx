import React from 'react';
import { Box } from '@mui/material';

import { Header, Companies, Service, Portfolio, Pricing, Testimonials, Footer } from './';

const Home = () => (
    <Box>
        <Header />
        <Companies />
        <Service />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Footer />
    </Box>
)

export default Home