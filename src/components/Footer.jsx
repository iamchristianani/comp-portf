import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box p={3} mt='100px' borderTop='1px solid #333'>
        <Grid container spacing={3} mt={1}>
            <Grid item xs={12} sm={12} md={3} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Link to="/">
                    <img src='https://res.cloudinary.com/anikriz/image/upload/v1699204065/works/comp-portf/logoipsum-256_zit7st.svg' className='site-logo' alt='Logo' />
                </Link>
            </Grid>
            <Grid item xs={12} sm={4} md={3} mt={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h5" mb={2}>Let's connect</Typography>
                <Typography variant='body1' mb={2}>
                    4517, Washington Ave.<br />
                    Manchester, Kentucky 39495
                </Typography>
                <Typography variant='body1' mb={2}>iamchristianani@gmail.com</Typography>
                <Typography variant='body1' mb={2}>+234 (813) 132-3800</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3} mt={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h5" mb={2}>Links</Typography>
                <Typography variant='body1' mb={2}>Testimonials</Typography>
                <Typography variant='body1' mb={2}>Pricing</Typography>
                <Typography variant='body1' mb={2}>Why Us</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3} mt={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h5" mb={2}>Follow Us</Typography>
                <FacebookIcon sx={{ fontSize: '30px', marginRight: '10px' }} />
                <TwitterIcon sx={{ fontSize: '30px', marginRight: '10px' }} />
                <LinkedInIcon sx={{ fontSize: '30px', marginRight: '10px' }} />
                <InstagramIcon sx={{ fontSize: '30px', marginRight: '10px' }} />
            </Grid>
        </Grid>
    </Box>
  )
}

export default Footer