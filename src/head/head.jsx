import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import headerImage from '../assets/head.jpg';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const Header = () => {
  return (
    <div data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">
      <Grid
        container
        spacing={4}
        alignItems="center"
        style={{ maxWidth: '1650px', margin: '0 auto', marginTop: '20px' }}
        sx={{
          '@media (max-width: 900px)': {
            direction: 'column',
          },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'left',
              fontWeight: '700',
              color: '#1b4f8f',
              marginLeft: { xs: '20px', sm: '70px' },
              '@media (max-width: 900px)': {
                marginLeft: '20px',
              },
            }}
          >
            The World's Most Powerful Event Ticketing Platform.
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              textAlign: 'left',
              fontWeight: '300',
              color: '#1b4f8f',
              marginLeft: { xs: '20px', sm: '70px' },
              '@media (max-width: 900px)': {
                marginLeft: '20px',
              },
            }}
          >
            Nft tickets is the complete solution to online ticketing for any type of live and virtual event
          </Typography>
        <div style={{ display: 'flex', justifyContent: 'left', marginTop: '50px', marginLeft: '150px' }}>
          <Button
            variant="outlined"
            sx={{
              color: '#1b4f8f',
              borderColor: '#1b4f8f',
              borderWidth: '1px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#ffffff',
                color: '#1b4f8f',
              },
            }}
          >
            <span style={{ marginRight: '5px' }}>Explore</span>
            <TravelExploreIcon />
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: '#1b4f8f',
              borderColor: '#1b4f8f',
              borderWidth: '1px',
              marginLeft: '20px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#ffffff',
                color: '#1b4f8f',
              },
            }}
          >
            <span style={{ marginRight: '5px' }}>Join</span>
            <PersonAddAlt1Icon />
          </Button>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        style={{ display: 'flex', justifyContent: 'left', marginTop: { xs: '50px', sm: '0' } }}
        sx={{
          order: { xs: 2, sm: 1 },
        }}
      >
        <img
          src={headerImage}
          alt="Gambar Header"
          style={{
            maxWidth: '80%',
            height: 'auto',
          }}
        />
      </Grid>
    </Grid>
    </div>
  );
};

export default Header;
