import React, { useState } from 'react';
import { Box, Stack, Typography, Grid, Card, CardContent } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Portfolio = () => {
    const portfolio = [
        {
            name: 'Portfolio 1',
            image: 'https://res.cloudinary.com/anikriz/image/upload/v1669060665/microverse/evangeline-shaw-nwLTVwb7DbU-unsplash_wdoheo.jpg',
            link: ''
        },
        {
            name: 'Portfolio 2',
            image: 'https://res.cloudinary.com/anikriz/image/upload/v1669060615/microverse/product-school-DL-yyYDDNX4-unsplash_bkhaa3.jpg',
            link: ''
        },
        {
            name: 'Portfolio 3',
            image: 'https://res.cloudinary.com/anikriz/image/upload/v1570297155/HNG%20%7CStartng%20Internship/bg-stats_ycgnzx.jpg',
            link: ''
        },
        {
            name: 'Portfolio 4',
            image: 'https://res.cloudinary.com/anikriz/image/upload/v1570296028/HNG%20%7CStartng%20Internship/bookkeeping_1_trlyjr.png',
            link: ''
        },
        {
            name: 'Portfolio 5',
            image: 'https://res.cloudinary.com/anikriz/image/upload/v1568825274/HNG%20%7CStartng%20Internship/Optimized-db-bg_ezpdgs.jpg',
            link: ''
        },
        {
            name: 'Portfolio 6',
            image: 'https://res.cloudinary.com/anikriz/image/upload/v1658486635/microverse/portfolio-image_uupdpi.jpg',
            link: ''
        }
    ];

    const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Box p={{ xs: 3, md: '0 200px' }} mt={{ xs: 5, md: 6 }}>
        <Stack>
            <Typography variant='h6' fontWeight='200' letterSpacing={9} sx={{ background: 'radial-gradient(circle, #efedff, #5c45fd)', WebkitBackgroundClip: 'text', color: 'transparent' }}>PORTFOLIO</Typography>
            <Typography variant='h4' mt='10px'>Our latest Work</Typography>
            <Typography variant='subtitle1' fontWeight='200' mt='10px'>Discover our freshest creations that showcase the power of design innovation and digital excellence. Explore our latest work and witness the impact we bring to every project.</Typography>
        </Stack>
        <Grid container spacing={3} mt={{ xs: 4, md: 2 }}>
            {
                portfolio.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            sx={{ position: 'relative', minHeight: 350, borderRadius: '10px', color: '#efedff', backgroundImage: `url(${project.image})`, backgroundSize: 'cover' }}
                        >
                            <CardContent sx={{ display: hoveredCard === index ? 'block' : 'none' }}>
                                <div className='project-btn'>
                                    <Typography variant='h5' mr={2}>See Project </Typography>
                                    <ArrowForwardIcon sx={{ fontSize: '30px' }} />
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

export default Portfolio