import React, { useState, useEffect } from 'react';
import {
  Container, Grid, Card, CardActionArea, CardMedia, CardContent,
  Dialog, Box,
} from '@mui/material';
import '../gallery/gallery.css';
import { Icon } from '@iconify/react';
import headerImg1 from '../assets/00001.png';
import headerImg2 from '../assets/00002.png';
import headerImg3 from '../assets/00003.png';
import headerImg4 from '../assets/00004.png';
import headerImg5 from '../assets/00005.png';
import headerImg6 from '../assets/00006.png';
import headerImg7 from '../assets/00007.png';
import headerImg8 from '../assets/00008.png';

export default function ActionAreaCard() {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [dialogStyle, setDialogStyle] = useState({
    height: window.innerWidth < 899 ? 800 : 465,
    width: window.innerWidth < 899 ? 600 : 1200,
  });

  const handleClickOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    width: window.innerWidth < 899 ? dialogStyle.width : 835,
    height: window.innerWidth < 899 ? dialogStyle.height : 400,
    bgcolor: '#fff',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    alignItems: 'center',
  };

  const imageStyle = {
    width: window.innerWidth < 599 ? 400 : (window.innerWidth < 899 ? 800 : 350),
    height: window.innerWidth < 599 ? 500 : (window.innerWidth < 899 ? 400 : 410),
    marginRight: window.innerWidth < 899 ? 0 : 20,
    marginLeft: window.innerWidth < 599 ? 55 : (window.innerWidth < 899 ? 80 : 0),
    marginTop: window.innerWidth < 599 ? -120 : (window.innerWidth < 899 ? -350 : 0),
  };

  const textStyle = {
    width: '50%',
  };

  const updateDialogStyle = () => {
    const newDialogStyle = {
      height: window.innerWidth < 599 ? 600 : window.innerWidth < 899 ? 800 : 465,
      width: window.innerWidth < 599 ? 400 : window.innerWidth < 899 ? 600 : 1200,
    };
    setDialogStyle(newDialogStyle);
  };

  useEffect(() => {
    updateDialogStyle();
    window.addEventListener('resize', updateDialogStyle);
    return () => {
      window.removeEventListener('resize', updateDialogStyle);
    };
  }, []);

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
    },
    {
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
    },
    {
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
    },
    {
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

  function handleOpenSeaClick(event) {
    event.preventDefault();
    window.open(event.target.href, '_blank');
  }


  return (
    <div className='container'>
      <Container sx={{ marginTop: '40px', marginBottom: '40px' }}>
        <div className="header-container">
          <div className="header-content">
            <h2 className="gallery">Gallery</h2>
            <div className="border"></div>
          </div>
          <div className='header-check'>
            <h2 className="check">Check it on</h2>
            <div className='opensea-container'>
              <a href="https://opensea.io/" className="opensea" onClick={handleOpenSeaClick}>
                OpenSea
                <Icon icon="simple-icons:opensea" className="opensea-icon" />
              </a>
            </div>
          </div>
        </div>
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} className="card-grid">
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
                  <div className='location'>
                    {card.description}
                    <Icon icon="mdi:check-decagram-outline" />
                  </div>
                  <div className='bid'>TOP BID</div>
                  <div className='eth'>
                    <Icon style={{ marginRight: '5px' }} icon="cryptocurrency:eth" />
                    22.2 ETH
                  </div>
                  <div className='days'>2 days left</div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          aria-labelledby="dialog-title"
          PaperProps={{
            style: {
              ...style,
              ...dialogStyle,
            },
          }}
        >
          <Box sx={style}>
            <div style={imageStyle}>
              <img src={selectedCard?.image} alt="NFT" style={{ width: '100%', borderRadius: '5px', margin: '30px' }} />
            </div>
            <div style={textStyle}>
              <div className='popup-title'>{selectedCard?.description}</div>
              <div className='popup-number'>{selectedCard?.number}</div>
              <Icon icon="simple-icons:opensea" className="popup-icon" />
              <div className='popup-border'></div>
              <div className='popup-border2'></div>
              <div className='popup-border3'></div>
              <div className='popup-border4'></div>
              <div className='popup-border-title1'>Headband</div>
              <div className='popup-border-title2'>Style</div>
              <div className='popup-border-title3'>Base</div>
              <div className='popup-border-title4'>Look</div>
              <Icon className='popup-icon1' icon="jam:headset-f" />
              <Icon className='popup-icon2' icon="solar:pallete-2-bold" />
              <Icon className='popup-icon3' icon="ic:outline-circle" />
              <Icon className='popup-icon4' icon="lucide:rotate-3d" />
            </div>
          </Box>
        </Dialog>
      </Container>
      <br />
    </div>
  );
}
