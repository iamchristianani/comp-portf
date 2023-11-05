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
            logo: 'https://res.cloudinary.com/anikriz/image/upload/v1699204068/works/comp-portf/logoipsum-234_ju0rkm.svg',
        },
        {
            name: 'Company 3',
            logo: 'https://res.cloudinary.com/anikriz/image/upload/v1699204067/works/comp-portf/logoipsum-291_hgesqm.svg',
        },
        {
            name: 'Company 4',
            logo: 'https://res.cloudinary.com/anikriz/image/upload/v1699204066/works/comp-portf/logoipsum-265_oiwczt.svg',
        },
        {
            name: 'Company 5',
            logo: 'https://res.cloudinary.com/anikriz/image/upload/v1699204065/works/comp-portf/logoipsum-256_zit7st.svg',
        },
        {
            name: 'Company 6',
            logo: 'https://res.cloudinary.com/anikriz/image/upload/v1699204064/works/comp-portf/logoipsum-243_jh7z76.svg',
        },
        {
            name: 'Company 7',
            logo: 'https://res.cloudinary.com/anikriz/image/upload/v1699204064/works/comp-portf/logoipsum-248_u3z5gl.svg',
        }
    ];

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' p={{ xs: 3, md: '0 200px' }} mt={{ xs: 5, md: 6 }}>
        <Typography variant='subtitle1'>Trusted by 30+ businesses</Typography>
        <Stack direction='row' width='100%' gap='30px' mt={3} pb={2} alignItems='center' sx={{ overflow: 'auto' }} className='all-companies' justifyContent={{ md: 'center' }}>
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