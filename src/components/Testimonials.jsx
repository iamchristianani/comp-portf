import React from 'react';
import { Box, Stack, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import Slider from "react-slick";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import VerifiedIcon from '@mui/icons-material/Verified';

const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        className: 'notes-slider',
        autoplay: true,
        autoplaySpeed: 7000,
    };
  return (
    <Box p={3} mt={5}>
        <Stack>
            <Typography variant='h6' fontWeight='200' letterSpacing={9} sx={{ background: 'radial-gradient(circle, #efedff, #5c45fd)', WebkitBackgroundClip: 'text', color: 'transparent' }}>TESTIMONIALS</Typography>
            <Typography variant='h4' mt='20px'>Our client says</Typography>
            <Typography variant='subtitle1' fontWeight='200' mt='15px'>Don't take our word for it. Hear it from our happy clients.</Typography>
        </Stack>
        <Stack>
            <Slider {...settings}>
                <Card sx={{ backgroundColor: '#161616', color: '#efedff', marginTop: '50px' }}>
                    <CardContent sx={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <Typography variant='h5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                        <Box mt={5}>
                            <div className='testimonial-client-images'>
                                <img src="https://res.cloudinary.com/anikriz/image/upload/v1566560640/HNG%20%7CStartng%20Internship/passport_photo-min_zremwg.jpg" alt="Client" className='testimonial-client-image' />
                            </div>
                            <Typography variant='h6'>Christian Ani</Typography>
                            <Typography variant='body2' fontWeight='200'>Software Developer, YSK</Typography>
                        </Box>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#161616', color: '#efedff', marginTop: '50px' }}>
                    <CardContent sx={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <Typography variant='h5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                        <Box mt={5}>
                            <div className='testimonial-client-images'>
                                <img src="https://res.cloudinary.com/anikriz/image/upload/v1566560640/HNG%20%7CStartng%20Internship/passport_photo-min_zremwg.jpg" alt="Client" className='testimonial-client-image' />
                            </div>
                            <Typography variant='h6'>Christian Ani</Typography>
                            <Typography variant='body2' fontWeight='200'>Software Developer, YSK</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Slider>
        </Stack>
    </Box>
  )
}

export default Testimonials