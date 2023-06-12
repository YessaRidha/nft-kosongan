import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Time from "../assets/Hihi.png";
import './Timeline.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CustomizedTimeline() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="postime">
    <Timeline position="alternate">
    <div class="peta-jalan">
    <Typography variant="h2">
        Peta Jalan
    </Typography>
    </div>
      <TimelineItem >
      <TimelineSeparator className="separator">
      <TimelineConnector className="my-timeline-connector" />
      <TimelineDot style={{ background: 'linear-gradient(135deg, #8A0AF8 0%, #DA3FD8 99.7%)' }}>
      <FastfoodIcon fontSize="large"/>
          </TimelineDot>
          <TimelineConnector className="my-timeline-connector" />
          </TimelineSeparator>
        <TimelineContent >
        <div className="custom-card" data-aos="zoom-in">
                  <CardContent>
              <Typography variant="h6" component="span">
                Eat
              </Typography>
              <Typography>Melalui percobaan demonstrasi ini, HARTi dan Tokyu Land akan menggabungkan nilai yang diciptakan dengan memanfaatkan NFT dan mempromosikan space DX untuk memberikan nilai baru kepada pelanggan yang menggunakan fasilitas komersial dan perusahaan penyewa yang membuka toko.</Typography>
            </CardContent>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem >
      <TimelineOppositeContent className="myClassName">
      <img src={Time} alt="Time" className="mygambar" data-aos="zoom-in"/>
        </TimelineOppositeContent>
        <TimelineSeparator className="separator">
        <TimelineConnector className="my-timeline-connector" />
        <TimelineDot style={{ background: 'linear-gradient(135deg, #8A0AF8 0%, #DA3FD8 99.7%)' }}>
        <LaptopMacIcon fontSize="large"/>
          </TimelineDot>
          <TimelineConnector className="my-timeline-connector" />
          </TimelineSeparator>
        <TimelineContent>
        <div className="custom-card2" data-aos="zoom-in">
                    <CardContent>
              <Typography variant="h6" component="span">
                Code
              </Typography>
              <Typography>Karena penyebaran COVID-19, penggunaan e-commerce oleh konsumen meningkat dan kesempatan untuk mengunjungi toko menurun, dan ada kebutuhan untuk meningkatkan nilai pengalaman yang unik dari toko fisik. HARTi, yang ingin menggunakan platform NFT HARTi, Tokyu Land Corporation, yang berfokus pada penciptaan nilai pengalaman baru untuk fasilitas komersial, pemikiran Tanseisha dan PxDT tentang pemecahan masalah melalui penciptaan ruang dan selanjutnya meningkatkan nilai pengalaman pengguna ruang setuju, dan diputuskan untuk melakukan percobaan demonstrasi. </Typography>
            </CardContent>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineSeparator className="separator">
      <TimelineConnector className="my-timeline-connector" />
      <TimelineDot style={{ background: 'linear-gradient(135deg, #8A0AF8 0%, #DA3FD8 99.7%)' }}>
            <HotelIcon fontSize="large"/>
          </TimelineDot>
          <TimelineConnector className="my-timeline-connector" />
          </TimelineSeparator>
        <TimelineContent>
        <div className="custom-card" data-aos="zoom-in">
            <CardContent>
              <Typography variant="h6" component="span">
                Sleep
              </Typography>
              <Typography>Melalui percobaan demonstrasi ini, HARTi dan Tokyu Land akan menggabungkan nilai yang diciptakan dengan memanfaatkan NFT dan mempromosikan space DX untuk memberikan nilai baru kepada pelanggan yang menggunakan fasilitas komersial dan perusahaan penyewa yang membuka toko.</Typography>
            </CardContent>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}