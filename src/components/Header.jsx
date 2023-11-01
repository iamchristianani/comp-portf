import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Header = () => (
    <Box display="flex" flexDirection="column" p={3}>
        <Typography variant='h2' fontWeight='bold'>We develop <span style={{ background: 'linear-gradient(to right, #efedff, #5c45fd)', WebkitBackgroundClip: 'text', color: 'transparent' }}>amazing</span> websites for your business<span style={{ color: '#5c45fd' }}>.</span></Typography>
        <Typography variant='subtitle1' color="#9594ae" pt={2} pb={2}>Discover our seamless workflow as we transform Figma designs into stunning Webflow websites. Explore the synergy between design and development for a pixel perfect online experience.</Typography>
        <Stack>
            <Box>
                <Button 
                    sx={{ border: '2px solid #5c45fd', color: '#fff', textTransform: 'none', borderRadius: '5px', padding: '10px 20px' }}
                    variant="outlined"
                >
                    View Work
                    <ArrowOutwardIcon sx={{ pl: 1 }} />
                </Button>
            </Box>
            <Box display="flex" flexDirection="column" mt='40px' justifyContent='center'>
                <div className='client-images'>
                    <img src="https://res.cloudinary.com/anikriz/image/upload/v1566560640/HNG%20%7CStartng%20Internship/passport_photo-min_zremwg.jpg" alt="Client" className='client-image bottom-image' />
                    <img src="https://res.cloudinary.com/anikriz/image/upload/v1566560640/HNG%20%7CStartng%20Internship/passport_photo-min_zremwg.jpg" alt="Client" className='client-image middle-image' />
                    <img src="https://res.cloudinary.com/anikriz/image/upload/v1566560640/HNG%20%7CStartng%20Internship/passport_photo-min_zremwg.jpg" alt="Client" className='client-image top-image' />
                </div>
                <Stack ml='120px'>
                    <Typography variant='h5'>1000+</Typography>
                    <Typography variant='subtitle1' color="#9594ae" mt='-10px'>Satisfied clients</Typography>
                </Stack>
            </Box>
        </Stack>
    </Box>
)

export default Header