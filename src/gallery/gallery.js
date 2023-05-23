import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import headerImg from '../assets/gallery.png';

export default function ActionAreaCard() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1049,
    height: 582,
    bgcolor: '#D9D9D9',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    alignItems: 'center',
  };

  const imageStyle = {
    width: 434,
    height: 410,
    marginRight: 20,
  };

  const textStyle = {
    width: '50%',
  };

  return (
    <Container maxWidth="sm" >
        <h1>Galery</h1>
      <Card sx={{ maxWidth: 250, height: 404 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height={257}
            width={246}
            image={headerImg}
            alt="NFT"
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            NFT
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Nftikets adalah solusi lengkap untuk tiket online untuk semua jenis acara langsung dan virtual
          </Typography>
        </CardContent>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={imageStyle}>
            <img src={headerImg} alt="NFT" style={{ width: '100%' }} />
          </div>
          <div style={textStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Nft
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Nft ticket
            </Typography>
          </div>
        </Box>
      </Modal>
    </Container>
  );
}