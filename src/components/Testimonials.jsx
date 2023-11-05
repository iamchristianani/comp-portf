import React from 'react';
import { Box, Stack, Typography, Card, CardContent } from '@mui/material';
import Slider from "react-slick";

const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
    };

    const testimonials = [
        {
            name: 'Christian Ani',
            company: 'YSK',
            image: 'https://res.cloudinary.com/anikriz/image/upload/v1566560640/HNG%20%7CStartng%20Internship/passport_photo-min_zremwg.jpg',
            testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            name: 'Christian Ani',
            company: 'YSK',
            image: 'https://res.cloudinary.com/anikriz/image/upload/v1566560640/HNG%20%7CStartng%20Internship/passport_photo-min_zremwg.jpg',
            testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            name: 'Christian Ani',
            company: 'YSK',
            image: 'https://res.cloudinary.com/anikriz/image/upload/v1566560640/HNG%20%7CStartng%20Internship/passport_photo-min_zremwg.jpg',
            testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
    ];
  return (
    <Box p={{ xs: 3, md: '0 200px' }} mt={{ xs: 5, md: 6 }}>
        <Stack>
            <Typography variant='h6' fontWeight='200' letterSpacing={9} sx={{ background: 'radial-gradient(circle, #efedff, #5c45fd)', WebkitBackgroundClip: 'text', color: 'transparent' }}>TESTIMONIALS</Typography>
            <Typography variant='h4' mt='10px'>Our client says</Typography>
            <Typography variant='subtitle1' fontWeight='200' mt='10px'>Don't take our word for it. Hear it from our happy clients.</Typography>
        </Stack>
        <Stack p={{ md: '0 100px' }}>
            <Slider {...settings}>
                {
                    testimonials.map((testimonial, index) => (
                        <Card sx={{  borderRadius: '15px', backgroundColor: '#161616', color: '#efedff', marginTop: '50px', boxShadow: '-1px -2px 1px -1px rgba(239, 237, 255, 0.2), -1px 1px 1px 0px rgba(239, 237, 255, 0.14), 1px 1px 3px 0px rgba(239, 237, 255, 0.12)' }} key={index}>
                            <CardContent sx={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <Typography variant='h5'>
                                    { testimonial.testimonial }
                                </Typography>
                                <Box mt={5}>
                                    <div className='testimonial-client-images'>
                                        <img src={testimonial.image} alt="Client" className='testimonial-client-image' />
                                    </div>
                                    <Typography variant='h6'>{ testimonial.name }</Typography>
                                    <Typography variant='body2' fontWeight='200'>{ testimonial.company }</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    ))
                }
            </Slider>
        </Stack>
    </Box>
  )
}

export default Testimonials