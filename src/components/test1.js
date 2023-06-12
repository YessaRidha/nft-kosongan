import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LanguageIcon from '@mui/icons-material/Language';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Time from "../assets/Hihi.png";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate" sx={{ backgroundColor: '#FFF4EB' }}>    
    <Typography
    variant="h3"
    component="span"
    sx={{
      fontFamily: 'Inter',
      fontSize: '66px',
      fontWeight: 700,
      lineHeight: '80px',
      letterSpacing: '0em',
      textAlign: 'center',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundImage: 'linear-gradient(135deg, #8A0AF8 0%, #DA3FD8 99.7%)',    }}
  >
    Peta Jalan
  </Typography>
  
      <TimelineItem sx={{ marginRight: '366px' }} >
        <TimelineSeparator>
        <TimelineConnector sx={{ background: 'linear-gradient(180deg, #8A0AF8 0%, #DB40D8 100%)' , width: '10px',borderRadius: '20px',}} />

          <TimelineDot color="primary">
            <LanguageIcon fontSize="large" />
          </TimelineDot>
          <TimelineConnector sx={{ background: 'linear-gradient(180deg, #8A0AF8 0%, #DB40D8 100%)' , width: '10px',}} />
          </TimelineSeparator>
        <Card sx={{ minWidth: 275, maxWidth: 350, marginLeft: '10px', py: '12px', px: 2,border: '4px solid',
        borderImageSource: 'linear-gradient(180deg, #8909F8 0%, #E043D6 100%)',
        borderImageSlice: 1,}}>
        <CardContent>
        <Typography variant="h5" component="div">
        HARTi dan Tokyu Land
        </Typography>
        <Typography variant="h7">
          Melalui percobaan demonstrasi ini, HARTi dan Tokyu Land akan menggabungkan nilai yang diciptakan dengan memanfaatkan NFT dan mempromosikan space DX untuk memberikan nilai baru kepada pelanggan yang menggunakan fasilitas komersial dan perusahaan penyewa yang membuka toko.
        </Typography>
      </CardContent>
    </Card>
      </TimelineItem>
      <TimelineItem sx={{ marginLeft: '355px' }} >
      <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" >
      <img src={Time} alt="Time" style={{ width: '500px', height: '500px' }} />
      </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineConnector sx={{ background: 'linear-gradient(180deg, #8A0AF8 0%, #DB40D8 100%)' , width: '10px',}} />
          <TimelineDot color="primary">
            <LaptopMacIcon fontSize="large"/>
          </TimelineDot>
          <TimelineConnector sx={{ background: 'linear-gradient(180deg, #8A0AF8 0%, #DB40D8 100%)' , width: '10px',}} />
          </TimelineSeparator>
        <Card
  sx={{
    minWidth: 275,
    maxWidth: 350,
    marginRight: '10px',
    py: '12px',
    px: 2,
    border: '4px solid',
    borderImageSource: 'linear-gradient(180deg, #8909F8 0%, #E043D6 100%)',
    borderImageSlice: 1,
  }}
>
        <CardContent>
        <Typography variant="h5" component="div">
        Latar belakang percobaan
        </Typography>
        <Typography variant="h7">
        Karena penyebaran COVID-19, penggunaan e-commerce oleh konsumen meningkat dan kesempatan untuk mengunjungi toko menurun, dan ada kebutuhan untuk meningkatkan nilai pengalaman yang unik dari toko fisik. HARTi, yang ingin menggunakan platform NFT HARTi, Tokyu Land Corporation, yang berfokus pada penciptaan nilai pengalaman baru untuk fasilitas komersial, pemikiran Tanseisha dan PxDT tentang pemecahan masalah melalui penciptaan ruang dan selanjutnya meningkatkan nilai pengalaman pengguna ruang setuju, dan diputuskan untuk melakukan percobaan demonstrasi.        </Typography>
      </CardContent>
    </Card>
      </TimelineItem>
      <TimelineItem sx={{ marginRight: '366px' }} >
        <TimelineSeparator>
        <TimelineConnector sx={{ background: 'linear-gradient(180deg, #8A0AF8 0%, #DB40D8 100%)' , width: '10px',}} />
          <TimelineDot color="primary">
            <HealthAndSafetyIcon fontSize="large"/>
          </TimelineDot>
          <TimelineConnector sx={{ background: 'linear-gradient(180deg, #8A0AF8 0%, #DB40D8 100%)', width: '10px', borderRadius: '20px',}} />
          </TimelineSeparator>
        <Card sx={{ minWidth: 275, maxWidth: 350, marginLeft: '10px', py: '12px', px: 2, border: '4px solid',
        borderImageSource: 'linear-gradient(180deg, #8909F8 0%, #E043D6 100%)',
        borderImageSlice: 1,}}>
        <CardContent>
        <Typography variant="h5" component="div">
          Test
        </Typography>
        <Typography variant="h7">
          Melalui percobaan demonstrasi ini, HARTi dan Tokyu Land akan menggabungkan nilai yang diciptakan dengan memanfaatkan NFT dan mempromosikan space DX untuk memberikan nilai baru kepada pelanggan yang menggunakan fasilitas komersial dan perusahaan penyewa yang membuka toko.
        </Typography>
      </CardContent>
    </Card>
      </TimelineItem>
    </Timeline>
  );
}