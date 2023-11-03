import React, { useState } from 'react';
import { Box, Stack, Typography, Card, CardContent } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Portfolio = () => {
    const portfolio = [
        {
            name: 'Portfolio 1',
            image: 'https://res.cloudinary.com/anikriz/image/upload/v1669060665/microverse/evangeline-shaw-nwLTVwb7DbU-unsplash_wdoheo.jpg',
            link: ''
        },
        {
            name: 'Portfolio 1',
            image: 'https://res.cloudinary.com/anikriz/image/upload/v1669060665/microverse/evangeline-shaw-nwLTVwb7DbU-unsplash_wdoheo.jpg',
            link: ''
        },
        {
            name: 'Portfolio 1',
            image: 'https://res.cloudinary.com/anikriz/image/upload/v1669060665/microverse/evangeline-shaw-nwLTVwb7DbU-unsplash_wdoheo.jpg',
            link: ''
        }
    ];

    const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Box p={3} mt={5}>
        <Stack>
            <Typography variant='h6' fontWeight='200' letterSpacing={9} sx={{ background: 'radial-gradient(circle, #efedff, #5c45fd)', WebkitBackgroundClip: 'text', color: 'transparent' }}>PORTFOLIO</Typography>
            <Typography variant='h4' mt='20px'>Our latest Work</Typography>
            <Typography variant='subtitle1' fontWeight='200' mt='15px'>Discover our freshest creations that showcase the power of design innovation and digital excellence. Explore our latest work and witness the impact we bring to every project.</Typography>
        </Stack>
        <Stack width='100%' pb={2} alignItems='center' mt={5} gap={4} mb={4}>
            {
                portfolio.map((project, index) => (
                    <Card
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        sx={{ position: 'relative', minWidth: 350, minHeight: 400, borderRadius: '10px', color: '#efedff', margin: '0 10px', backgroundImage: `url(${project.image})`, backgroundSize: 'cover' }} key={index}
                    >
                        <CardContent className='project-btn-cont' sx={{ padding: 0, display: hoveredCard === index ? 'block' : 'none' }}>
                            <div className='project-btn'>
                                <Typography variant='h5' mr={2}>See Project </Typography>
                                <ArrowForwardIcon sx={{ fontSize: '30px' }} />
                            </div>
                        </CardContent>
                    </Card>
                ))
            }
        </Stack>
    </Box>
  )
}

export default Portfolio