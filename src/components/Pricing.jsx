import React from 'react';
import { Box, Stack, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import VerifiedIcon from '@mui/icons-material/Verified';

const Pricing = () => {
    const prices = [
        {
            name: 'Basic',
            price: '$445',
            description: 'Fully responsive 1 page website, developed in Webflow. Unlimited Sections',
            features: [
                'Functional website',
                'Responsive design',
                'Content upload',
                'Functional website',
                'Functional website',
                'Functional website',
            ],
            link: 'https://www.google.com',
        },
        {
            name: 'Standard',
            price: '$645',
            description: 'Fully responsive 1 page website, developed in Webflow. Unlimited Sections',
            features: [
                'Functional website',
                'Responsive design',
                'Content upload',
                'Functional website',
                'Functional website',
                'Functional website',
            ],
            link: 'https://www.google.com',
        },
        {
            name: 'Premium',
            price: '$945',
            description: 'Fully responsive 1 page website, developed in Webflow. Unlimited Sections',
            features: [
                'Functional website',
                'Responsive design',
                'Content upload',
                'Functional website',
                'Functional website',
                'Functional website',
            ],
            link: 'https://www.google.com',
        },
    ];

  return (
    <Box p={3} mt={1}>
        <Stack>
            <Typography variant='h6' fontWeight='200' letterSpacing={9} sx={{ background: 'radial-gradient(circle, #efedff, #5c45fd)', WebkitBackgroundClip: 'text', color: 'transparent' }}>PRICING</Typography>
            <Typography variant='h4' mt='20px'>One fixed price to get your project done</Typography>
            <Typography variant='subtitle1' fontWeight='200' mt='15px'>Your custom on-demand for only a single payment.</Typography>
        </Stack>
        <Grid container spacing={3} mt={5}>
            {
                prices.map((price, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card sx={{ backgroundColor: '#161616', color: '#efedff', boxShadow: '-1px -2px 1px -1px rgba(239, 237, 255, 0.2), -1px 1px 1px 0px rgba(239, 237, 255, 0.14), 1px 1px 3px 0px rgba(239, 237, 255, 0.12)' }}>
                            <CardContent>
                                <Stack>
                                    <Typography variant='subtitle1' fontWeight='200'>{ price.name }</Typography>
                                    <Typography variant='h4'>{ price.price }</Typography>
                                    <Typography variant='subtitle2' fontWeight='200'>{ price.description }</Typography>
                                </Stack>
                                <Stack spacing={2} mt={3}>
                                    {
                                        price.features.map((feature, index) => (
                                            <Box display="flex" alignItems="center" key={index}>
                                                <VerifiedIcon sx={{ color: '#5c45fd' }} />
                                                <Typography variant="body1" sx={{ marginLeft: '5px' }}>{ feature }</Typography>
                                            </Box>
                                        ))
                                    }
                                </Stack>
                                <Stack mt={3}>
                                    <Button sx={{ border: '2px solid #5c45fd', color: '#efedff', textTransform: 'none', borderRadius: '5px', padding: '10px 20px' }} variant="outlined">
                                        Get Started
                                        <ArrowOutwardIcon sx={{ pl: 1 }} />
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    </Box>
  )
}

export default Pricing