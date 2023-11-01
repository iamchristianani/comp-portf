import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, Home } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#161616' }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App