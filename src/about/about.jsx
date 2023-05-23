import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import image from '../assets/coinnft.png';


const About = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        marginLeft: '30px',
        marginRight: '30px',
        boxShadow: '3px 3px 10px 2px rgba(0, 0, 0, 0.5)',
        '@media (max-width: 500px)': {
          marginLeft: '15px',
          marginRight: '15px',
        },
        '@media (max-width: 400px)': {
          marginLeft: '5px',
          marginRight: '5px',
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: '30%',
          margin: '20px',
          objectFit: 'cover',
          display: 'block',
          '@media (max-width: 960px)': {
            display: 'none',
          },
          '@media (max-width: 500px)': {
            margin: '10px'
          },
          '@media (max-width: 400px)': {
            margin: '5px'
          },
        }}
        image={image}
        alt="Image"
      />
      <CardContent>
        <Typography variant="h3" component="div" sx={{
          marginTop: '15px',
          '@media (max-width: 500px)': { fontSize: '2rem', marginTop: '10px' },
          '@media (max-width: 400px)': { fontSize: '1.5rem', marginTop: '5px' },
          background: 'linear-gradient(120deg, #8E24AA, #E91E63)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold',
          fontFamily: 'Syne',fontStyle: 'normal'
          }}>
          Change the way you build website forever.
        </Typography>
        <Typography variant="h6" color="black" sx={{ '@media (max-width: 500px)': { fontSize: '1rem', marginTop: '10px' }, 
        '@media (max-width: 400px)': { fontSize: '0.8rem', marginTop: '5px' }, 
        fontFamily: 'Syne',
         }}>
          Test lorem lorem test deskripsi masih dalam pengetesan. Test test, loa loa.efefse
          Test lorem lorem test deskripsi masih dalam pengetesan. Test test, loa loa.rgr r regr gr g
          Test lorem lorem test deskripsi masih dalam pengetesan. Test test, loa loa. grgr  r gr g r   rrggd
          Test lorem lorem test deskripsi masih dalam pengetesan. Test test, loa loa.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default About;
