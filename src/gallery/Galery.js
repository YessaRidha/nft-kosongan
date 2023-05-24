import React, { useState } from 'react';
import {
  Container, Grid, Card, CardActionArea, CardMedia, CardContent,
  Typography, Dialog, Box
} from '@mui/material';
import '../gallery/gallery.css';
import { Icon } from '@iconify/react';
import headerImg1 from '../assets/00001.png'
import headerImg2 from '../assets/00002.png'
import headerImg3 from '../assets/00003.png'
import headerImg4 from '../assets/00004.png'
import headerImg5 from '../assets/00005.png'
import headerImg6 from '../assets/00006.png'
import headerImg7 from '../assets/00007.png'
import headerImg8 from '../assets/00008.png'



export default function ActionAreaCard() {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);




  const handleClickOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const style = {
    width: 831.5,
    height: 400,
    bgcolor: '#fff',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    alignItems: 'center',
  };

  const imageStyle = {
    width: 300,
    height: 410,
    marginRight: 20,
  };

  const textStyle = {
    width: '50%',
  };

  const cards = [
    {
      title: 'Team Series',
      description: 'Asatomo Tokyo',
      image: headerImg1,
      number: '#354',
    },
    {
      title: 'Team Series',
      description: 'Asatomo Tokyo',
      image: headerImg2,
      number: '#355',
    }, {
      title: 'Team Series',
      description: 'Asatomo Tokyo',
      image: headerImg3,
      number: '#356',
    },
    {
      title: 'Team Series',
      description: 'Asatomo Tokyo',
      image: headerImg4,
      number: '#357',
    }, {
      title: 'Team Series',
      description: 'Asatomo Tokyo',
      image: headerImg5,
      number: '#358',
    },
    {
      title: 'Team Series',
      description: 'Asatomo Tokyo',
      image: headerImg6,
      number: '#359',
    }, {
      title: 'Team Series',
      description: 'Asatomo Tokyo',
      image: headerImg7,
      number: '#360',
    },
    {
      title: 'Team Series',
      description: 'Asatomo Tokyo',
      image: headerImg8,
      number: '#361',
    },
  ];




  return (
    <div className='container'>
      <Container sx={{ marginTop: '40px', marginBottom: '40px' }}>
        <div className="header-container">
          <div className="header-content">
            <h1 className="gallery">Gallery</h1>
            <div className="border"></div>
            <h2 className="check">Check it on</h2>
            <a href="https://opensea.io/" className="opensea">
              OpenSea
              <Icon icon="simple-icons:opensea" className="opensea-icon" />
            </a>
          </div>
        </div>

        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ height: '100%', borderRadius: '5px' }}>
                <CardActionArea onClick={() => handleClickOpen(card)}>
                  <CardMedia
                    component="img"
                    height={257}
                    width={246}
                    image={card.image}
                    alt="NFT"
                  />
                  <div className="backnomor">
                    <h5 className="nomor">{card.number}</h5>
                  </div>
                </CardActionArea>
                <CardContent className="card-content">
                  <div className='team'>{card.title}</div>
                  <div className='location'>{card.description}<Icon icon="mdi:check-decagram-outline" /></div>
                  <div className='bid' >TOP BID</div>
                  <div className='eth' ><Icon style={{ marginRight: '5px' }} icon="cryptocurrency:eth" />  22.2 ETH</div>
                  <div className='days' >2 days left</div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog
          style={{ borderRadius: '150px' }}
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          aria-labelledby="dialog-title"
        >
          <Box sx={style}>
            <div style={imageStyle}>
              <img src={selectedCard?.image} alt="NFT" style={{ width: '100%', borderRadius: '15px' }} />
            </div>
            <div style={textStyle}>
              <Typography variant="h6" component="h2">
                NFT
              </Typography>
              <Typography sx={{ mt: 2 }}>Nft ticket</Typography>
            </div>
          </Box>
        </Dialog>
      </Container>
      <br />
    </div>
  );
}
