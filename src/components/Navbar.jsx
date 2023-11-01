import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';


import { Stack  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Navbar = () =>  (
    <Stack
        direction="row"
        alignItems="center"
        p={2}
        backgroundColor="#161616"
        sx={{ position: 'sticky', top: 0, justifyContent: 'space-between' }}
        zIndex={100}
    >
        <Stack direction="row"  sx={{ alignItems: 'center', justifyContent: 'center' }}>
            <MenuIcon sx={{ pr: 3 }} />
            <Link to="/">
                <Typography variant="h6">Logo</Typography>
            </Link>
        </Stack>
        <Button 
            style={{ backgroundColor: '#5c45fd', color: '#fff', textTransform: 'none', borderRadius: '5px', padding: '10px 20px' }}
            variant="contained"
        >
            Let's Talk
            <ArrowOutwardIcon sx={{ pl: 1 }} />
        </Button>
    </Stack>
)

export default Navbar