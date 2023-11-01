import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Companies = () => {
    const companies = [
        {
            name: 'Company 1',
            logo: 'https://res.cloudinary.com/anikriz/image/upload/v1698752388/works/comp-portf/logoipsum-285_uokiqh.svg',
        },
        {
            name: 'Company 2',
            logo: 'https://res.cloudinary.com/anikriz/image/upload/v1698752388/works/comp-portf/logoipsum-285_uokiqh.svg',
        },
        {
            name: 'Company 2',
            logo: 'https://res.cloudinary.com/anikriz/image/upload/v1698752388/works/comp-portf/logoipsum-285_uokiqh.svg',
        },
        {
            name: 'Company 2',
            logo: 'https://res.cloudinary.com/anikriz/image/upload/v1698752388/works/comp-portf/logoipsum-285_uokiqh.svg',
        },
        {
            name: 'Company 2',
            logo: 'https://res.cloudinary.com/anikriz/image/upload/v1698752388/works/comp-portf/logoipsum-285_uokiqh.svg',
        }
    ];

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' p={3}>
        <Typography variant='subtitle1'>Trusted by 30+ businesses</Typography>
        <Stack direction='row' width='100%' gap='30px' mt={3} pb={2} alignItems='center' sx={{ overflow: 'auto' }} className='all-companies'>
            {
                companies.map((company, index) => (
                    <div className='company-container' key={index}>
                        <img src={company.logo} className='company-image' alt={company.name} />
                    </div>
                ))
            }
        </Stack>
    </Box>
  )
}

export default Companies