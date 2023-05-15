import React from 'react';
import { Grid, Typography } from '@mui/material';
import headerImage from '../assets/head.jpg'

const Header = () => {
  return (
    <Grid container spacing={6} alignItems="center" style={{ maxWidth: '1920px', margin: '0 auto', marginTop:'20px' }}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h2" style={{ textAlign: 'left', marginLeft: '100px' }}>The World's Most Powerful Event Ticketing Platform.</Typography>
        <Typography variant="subtitle1" style={{ textAlign: 'left',marginLeft: '100px' }}>Nft tickets is the complete solution to online ticketing for any type of live and virtual event</Typography>
      </Grid>
      <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'left' }}>
        <img src={headerImage} alt="Gambar Header" style={{ maxWidth: '80%', height: 'auto' }} />
      </Grid>
    </Grid>
  );
};

export default Header;
