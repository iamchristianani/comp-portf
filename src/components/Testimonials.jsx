import React from 'react';
import { Box, Stack, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import VerifiedIcon from '@mui/icons-material/Verified';

const Testimonials = () => {
  return (
    <Box p={3} mt={5}>
        <Stack>
            <Typography variant='h6' fontWeight='200' letterSpacing={9} sx={{ background: 'radial-gradient(circle, #efedff, #5c45fd)', WebkitBackgroundClip: 'text', color: 'transparent' }}>TESTIMONIALS</Typography>
            <Typography variant='h4' mt='20px'>Our client says</Typography>
            <Typography variant='subtitle1' fontWeight='200' mt='15px'>Don't take our word for it. Hear it from our happy clients.</Typography>
        </Stack>
        <Stack>
            All Testimonials
        </Stack>
    </Box>
  )
}

export default Testimonials