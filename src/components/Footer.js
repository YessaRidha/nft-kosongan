import React from "react";
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

const ModernFooter = () => {
  return (
    <footer>
      <div className="footer-section">
        <h3>About Us</h3>
        <p>Jelajahi berbagai macam product dan layanan yang Menyediakan informasi terbaru dan terpercaya seputar Product Kami</p>
      </div>
      <div className="footer-section">
        <h3>Links</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/promo">Promo</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Help Center</h3>
        <ul>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Layanan</h3>
        <ul>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <ul className="social-media-links">
        <li>
        <a href="https://www.facebook.com">
          <FacebookIcon className="icon" />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com">
          <TwitterIcon className="icon" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com">
          <InstagramIcon className="icon" />
        </a>
      </li>
      <li>
        <a href="https://www.telegram.org">
          <TelegramIcon className="icon" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com">
          <LinkedInIcon className="icon" />
        </a>
      </li>      
        </ul>
      </div>
    </footer>
  );
};

export default ModernFooter;
