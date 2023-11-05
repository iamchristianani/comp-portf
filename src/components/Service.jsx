import React from 'react';
import { Box, Stack, Typography, Grid, Card, CardContent } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Service = () => {
    const services = [
        {
            icon: 'EmojiEventsIcon',
            heading: 'Expertise in Figma-to-Webflow',
            description: 'We have a proven track record and expertise in seamlessly turning Figa designs into functional Webflow websites.'
        },
        {
            icon: 'EmojiEventsIcon',
            heading: 'On-Page SEO Excellence',
            description: 'We have a proven track record and expertise in seamlessly turning Figa designs into functional Webflow websites.'
        },
        {
            icon: 'EmojiEventsIcon',
            heading: 'Interactive Magic',
            description: 'We have a proven track record and expertise in seamlessly turning Figa designs into functional Webflow websites.'
        },
        {
            icon: 'EmojiEventsIcon',
            heading: 'Dedicated Project Manager',
            description: 'We have a proven track record and expertise in seamlessly turning Figa designs into functional Webflow websites.'
        },
        {
            icon: 'EmojiEventsIcon',
            heading: 'Comprehensive Testing',
            description: 'We have a proven track record and expertise in seamlessly turning Figa designs into functional Webflow websites.'
        },
        {
            icon: 'EmojiEventsIcon',
            heading: 'Timely Delivery',
            description: 'We have a proven track record and expertise in seamlessly turning Figa designs into functional Webflow websites.'
        }
    ];

  return (
    <Box p={{ xs: 3, md: '0 200px' }} mt={{ xs: 5, md: 6 }}>
        <Stack>
            <Typography variant='h6' fontWeight='200' letterSpacing={9} sx={{ background: 'radial-gradient(circle, #efedff, #5c45fd)', WebkitBackgroundClip: 'text', color: 'transparent' }}>SERVICE</Typography>
            <Typography variant='h4' mt='10px'>Exceeding Expectations</Typography>
            <Typography variant='subtitle1' fontWeight='200' mt='10px'>We're not just another agency; we're your path to exceptional web projects.</Typography>
        </Stack>
        <Grid container columnSpacing={3} rowSpacing={{ xs: 3, md: 6 }} mt={{ xs: 4, md: 2 }}>
            {
                services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ backgroundColor: '#161616', boxShadow: '-1px -2px 1px -1px rgba(239, 237, 255, 0.2), -1px 1px 1px 0px rgba(239, 237, 255, 0.14), 1px 1px 3px 0px rgba(239, 237, 255, 0.12)', borderRadius: '10px', color: '#efedff' }} className='each-service'>
                            <CardContent>
                                <div style={{ width: '70px', height: '70px', backgroundColor: '#333335', borderRadius: '10px' }}>
                                    <EmojiEventsIcon sx={{ color: '#5c45fd', fontSize: '40px', mt: '15px', ml: '15px', transform: 'rotate(25deg)' }} />
                                </div>
                                <Typography variant='h5' mt='20px'>{ service.heading }</Typography>
                                <Typography variant='subtitle2' fontWeight='200' mt='15px'>{ service.description }</Typography>
                                <div style={{ width: '60px', height: '60px', borderRadius: '5px', border: '1px solid #333', marginTop: '30px' }} className='service-btn'>
                                    <ArrowForwardIcon sx={{ fontSize: '30px', mt: '15px', ml: '15px' }} />
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    </Box>
  )
}

export default Service