import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }} position='relative' p='20px'>
      <Typography mt='30px' mb='20px' color='#ff2625' fontWeight='600' fontSize='26px'>
        Strongman Program Builder
      </Typography>

      <Typography fontWeight='700' mb='100px'
      sx={{ fontSize: {  lg: '44px', xs: '40px'}}}>
        Create Programs <br/> & Build Strength 
      </Typography>

      <Typography mb='15px' fontSize='22px' lineHeight='35px'>
        Check the most effective exercises
      </Typography>

      <Button variant='contained' color='error' href='#exercises'
      sx={{ backgroundColor: '#ff2625', padding: '10px'}}>Explore Exercises</Button>

      <Typography
      fontWeight='600'
      fontSize='200px'
      color='#ff2625'
      sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none'}}}>Exercise</Typography>

      <img 
      src={HeroBannerImage}
      alt='hero-banner'
      className='hero-banner-img'/>
    </Box>
  );
};

export default HeroBanner;