import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"; 
import SettingsIcon from '@mui/icons-material/Settings';
import Logo from "../assets/Logo.png";
import './NavBar.css';
import { styled } from '@mui/material/styles';
import {Dialog, DialogTitle, DialogContent, DialogActions, IconButton,Typography,} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PaymentsIcon from '@mui/icons-material/Payments';
import Box from '@mui/material/Box';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FlagIcon from '@mui/icons-material/Flag';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Switch from '@mui/material/Switch';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    width: "400px",
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  }));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const label = { inputProps: { 'aria-label': 'Switch demo' } };
export const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="appBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <a href="/" className="logoLink">
          <img src={Logo} alt="Logo" className="logoImage" />
        </a>
        <div className="navbarContainer">
        <Button color="inherit">
          <Link to="/" className="navbarLink">
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/" className="navbarLink">
            Explore
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/ticket" className="navbarLink">
            Ticket
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/" className="navbarLink">
            Ticket Ku
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/" className="navbarLink">
            Featured
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/" className="navbarLink">
            About Us
          </Link>
        </Button>
      </div>
      <div className="buttonContainer">
      <Button
        color="inherit"
        className="loginButton"
      >
        <Link to="/login" className="buttonLink">
          Login
        </Link>
      </Button>      
      </div>
      <div className="buttonContainer1">
      <Button color="inherit" className="settingsButton" onClick={handleClickOpen}>
        <Link to="/" className="buttonLink">
          <SettingsIcon style={{ color: 'black' }} />
        </Link>
      </Button>
    </div>
        </Toolbar>
      </Container>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Settings
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Typography variant="subtitle1" gutterBottom className="batas">
        <Box className="setmode">
        <span className="setspan">
  <DarkModeIcon className="icons"/>
  <span>Mode</span>
</span>
<Switch {...label} defaultChecked />      </Box>
    </Typography>
    <Typography variant="subtitle1" gutterBottom className="batas">
            <Box className="setmode">
        <span className="setspan">
          <LanguageIcon className="icons"/>
          Language
        </span>
        <Button> <FlagIcon/> </Button> 
      </Box>
        </Typography>
        <Typography gutterBottom>
        <Box className="setmode">
        <span className="setspan">
          <PaymentsIcon className="icons"/>
          Currency          
        </span>
        <Button> <AttachMoneyIcon/> </Button> 
      </Box>
        </Typography>
      </DialogContent>
    </BootstrapDialog>
</div>
  );
}
