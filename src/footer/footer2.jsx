import React from "react";
import './footer2.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Icon } from "@iconify/react";
import { CardMedia, TextField, Typography } from "@mui/material";
import Imagenft from '../assets/nft.png'


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const Footer = () => {
  return (
    <div className="footer" style={{ boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.2)' }}>
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div_pt">
            <CardMedia
              component="img"
              sx={{
                width: '50%',
                left: '87px',
                top: '68px',
                cursor: 'pointer'
              }}
              image={Imagenft}
              alt="NFT"
              onClick={scrollToTop}
            />
            <div>
              <a>
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOnIcon style={{ marginRight: '10px' }} />Cerezo Osaka, Japan
                </p>
              </a>
              <a>
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon style={{ marginRight: '10px' }} /> +81 584 000 99
                </p>
              </a>
              <a>
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon style={{ marginRight: '10px' }} /> app@xetia.io
                </p>
              </a>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="sb_footer-links_div" style={{ height: '100%', flex: '1' }}>
              <h2>Useful Link</h2>
              <a href="/location">
                <p>About Us</p>
              </a>
              <a href="/location">
                <p>Contacts</p>
              </a>
              <a href="/location">
                <p>Hot Deals</p>
              </a>
              <a href="/location">
                <p>Promotions</p>
              </a>
              <a href="/location">
                <p>Q&A</p>
              </a>
            </div>
            <div className="sb_footer-links_div" style={{ height: '100%', flex: '1' }}>
              <h2>More</h2>
              <a href="/location">
                <p>Payments</p>
              </a>
              <a href="/location">
                <p>Refunds</p>
              </a>
              <a href="/location">
                <p>Checkout</p>
              </a>
              <a href="/location">
                <p>Shipping</p>
              </a>
              <a href="/location">
                <p>Privacy Policy</p>
              </a>
            </div>
          </div>
          <div className="sb_footer-links_div_news" style={{ height: '100%', flex: '1' }} >
            <h2>Newsletter</h2>
            <a>Masih percobaan. Ini adalah deskripsi perusahaan. Masih percobaan untuk mencoba.</a>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                name="email"
                type={"email"}
                placeholder="Enter email address"
                style={{
                  marginRight: '10px',
                  marginTop: '10px',
                  height: '25px',
                  border: '2px solid black',
                  borderRadius: '5px 0 0 5px',
                  textAlign: 'center',
                }}
              />
              <button
                type="submit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '-20px',
                  marginTop: '10px',
                  height: '31px',
                  borderRadius: '8px',
                  backgroundColor: 'black',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                <Icon icon="zondicons:send" style={{ marginLeft: '2px', marginRight: '0px' }} />
              </button>
            </div>
          </div>
        </div>
        <div className="sb_footer-divider"></div>
        <div className="sb_footer-copyright">
          <p>@{new Date().getFullYear()} NFT Ticket Staging. All rights reserved.</p>
          <div className="sb_footer-links_div_media">
            <div className="socialmedia">
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <Icon className="icon" icon="ic:round-facebook" style={{ fontSize: '30px' }} />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <Icon className="icon" icon="mdi:twitter" style={{ fontSize: '30px' }} />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <Icon className="icon" icon="ri:instagram-fill" style={{ fontSize: '30px' }} />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <Icon className="icon" icon="mdi:youtube" style={{ fontSize: '30px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
