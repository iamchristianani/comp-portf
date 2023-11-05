import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';


import { Stack, Box  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const toggleMenu = () => {
        document.getElementById('menu-overlay').classList.toggle('menu-display');
        document.getElementById('menu-display').classList.toggle('menu-display');
    }

    return (
        <Stack
            direction="column"
            alignItems="center"
            p={{ xs: 3, md: '15px 200px' }}
            backgroundColor="#161616"
            sx={{ position: 'sticky', top: 0, justifyContent: 'space-between' }}
            zIndex={100}
            borderBottom='1px solid #333'
        >
            <div className="menu-overlay menu-display" id="menu-overlay"></div>
            <div id="menu-display" className='mobile-toggler menu-display'>
                <Stack direction='row' justifyContent='space-between' width='100%'>
                    <Stack p='20px 0 0 20px' gap='50px'>
                        <Link to="/" onClick={toggleMenu}>
                            <img src='https://res.cloudinary.com/anikriz/image/upload/v1699204065/works/comp-portf/logoipsum-256_zit7st.svg' className='site-logo' alt='Logo' />
                        </Link>
                        <Link to="/" onClick={toggleMenu}>
                            <Typography variant="h4" fontWeight='200'>Why Us</Typography>
                        </Link>
                        <Link to="/" onClick={toggleMenu}>
                            <Typography variant="h4" fontWeight='200'>Case Studies</Typography>
                        </Link>
                        <Link to="/" onClick={toggleMenu}>
                            <Typography variant="h4" fontWeight='200'>Testimonials</Typography>
                        </Link>
                        <Link to="/" onClick={toggleMenu}>
                            <Typography variant="h4" fontWeight='200'>FAQ</Typography>
                        </Link>
                    </Stack>
                    <Box>
                        <CloseIcon onClick={toggleMenu} sx={{ fontSize: '50px', mt: '15px', mr: '20px', cursor: 'pointer' }} />
                    </Box>
                </Stack>
            </div>
            <div className='mobile-view'>
                <Stack direction="row"  sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <MenuIcon onClick={toggleMenu} sx={{ pr: 3, cursor: 'pointer' }} />
                    <Link to="/">
                        <img src='https://res.cloudinary.com/anikriz/image/upload/v1699204065/works/comp-portf/logoipsum-256_zit7st.svg' className='site-logo' alt='Logo' />
                    </Link>
                </Stack>
                <Button 
                    style={{ backgroundColor: '#5c45fd', color: '#fff', textTransform: 'none', borderRadius: '5px', padding: '10px 20px' }}
                    variant="contained"
                >
                    Let's Talk
                    <ArrowOutwardIcon sx={{ pl: 1 }} />
                </Button>
            </div>
            <div className='desktop-view'>
                <Link to="/">
                    <img src='https://res.cloudinary.com/anikriz/image/upload/v1699204065/works/comp-portf/logoipsum-256_zit7st.svg' className='site-logo' alt='Logo' />
                </Link>
                <Stack direction="row" gap={4}  sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link to="/">
                        <Typography variant="body1" fontWeight='200'>Why Us</Typography>
                    </Link>
                    <Link to="/">
                        <Typography variant="body1" fontWeight='200'>Case Studies</Typography>
                    </Link>
                    <Link to="/">
                        <Typography variant="body1" fontWeight='200'>Testimonials</Typography>
                    </Link>
                    <Link to="/">
                        <Typography variant="body1" fontWeight='200'>FAQ</Typography>
                    </Link>
                </Stack>
                <Button 
                    style={{ backgroundColor: '#5c45fd', color: '#fff', textTransform: 'none', borderRadius: '5px', padding: '10px 20px' }}
                    variant="contained"
                >
                    Let's Talk
                    <ArrowOutwardIcon sx={{ pl: 1 }} />
                </Button>
            </div>
        </Stack>
    )
}

export default Navbar