import './Banner.css';
import headerImg from "../assets/head.png";
import BackpackIcon from '@mui/icons-material/Backpack';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const Banner = () => {
  const handleMouseMove = (e) => {
    const img = e.target;
    const { width, height, top, left } = img.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const xOffset = 50 * (0.5 - x);
    const yOffset = 50 * (0.5 - y);
    img.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
  };

  const handleMouseOut = (e) => {
    const img = e.target;
    img.style.transform = 'translate(0, 0)';
  };


  return (
    <section className="banner" id="home">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <span className="tagline">Selamat Datang</span>
            <h1>Platform Penjualan Tiket Acara Tercanggih di Dunia.</h1>
            <p>Nftikets adalah solusi lengkap untuk tiket online untuk semua jenis acara langsung dan virtual</p>
            <div style={{ display: 'flex' }}>
              <button onClick={() => console.log('contact')}>
                <InfoIcon />Pusat Bantuan
              </button>
              <button onClick={() => console.log('contact')}>
                <BackpackIcon  />Pusat Bantuan
              </button>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div>
              <img
                src={headerImg}
                alt="Header Img"
                onMouseMove={handleMouseMove}
                onMouseOut={handleMouseOut}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}