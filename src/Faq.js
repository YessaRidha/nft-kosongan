import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqList = [
    { question: 'Apa itu produk/jasa yang Anda tawarkan?', answer: 'Produk yang kami tawarkan adalah barang elektronik seperti Hp, Laptop, dan Tablet' },
    { question: 'Berapa lama waktu yang dibutuhkan untuk pengiriman produk?', answer: 'Waktu pengiriman produk bergantung pada lokasi pengiriman dan metode pengiriman yang dipilih. Kami akan memberikan estimasi waktu pengiriman yang lebih tepat setelah pesanan diproses.' },
    { question: 'Apakah produk/jasa yang Anda tawarkan dapat dikembalikan?', answer: 'Ya, produk/jasa yang kami tawarkan dapat dikembalikan dalam waktu tertentu dengan syarat dan ketentuan yang berlaku.' },
    { question: 'Bagaimana cara melakukan pembayaran?', answer: 'Kami menerima pembayaran dengan berbagai metode seperti transfer bank, kartu kredit, e-wallet, dan lainnya. Pilihan metode pembayaran akan ditampilkan saat Anda melakukan pemesanan.' },
    { question: 'Apakah ada diskon atau promosi yang tersedia saat ini?', answer: 'Kami menerima pembayaran dengan berbagai metode seperti transfer bank, kartu kredit, e-wallet, dan lainnya. Pilihan metode pembayaran akan ditampilkan saat Anda melakukan pemesanan.' },
    { question: 'Apakah produk Anda tersedia untuk pengiriman internasional?', answer: 'Kami menerima pembayaran dengan berbagai metode seperti transfer bank, kartu kredit, e-wallet, dan lainnya. Pilihan metode pembayaran akan ditampilkan saat Anda melakukan pemesanan.' },
    { question: 'Apakah produk Anda tersedia untuk pengiriman internasional?', answer: 'Kami menerima pembayaran dengan berbagai metode seperti transfer bank, kartu kredit, e-wallet, dan lainnya. Pilihan metode pembayaran akan ditampilkan saat Anda melakukan pemesanan.' },
    { question: 'Apakah produk Anda tersedia untuk pengiriman internasional?', answer: 'Kami menerima pembayaran dengan berbagai metode seperti transfer bank, kartu kredit, e-wallet, dan lainnya. Pilihan metode pembayaran akan ditampilkan saat Anda melakukan pemesanan.' },
  ];

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderAccordionItem = (faq, index) => {
    return (
      <div key={index} className="accordion-item">
      <Accordion
          expanded={activeIndex === index}
          onChange={() => handleAccordionClick(index)}
          className="your-cus"
        >
        <AccordionSummary
        className="sumary"
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index + 1}a-content`}
        id={`panel${index + 1}a-header`}
      >
        <Typography className="your-custom-classname">{faq.question}</Typography>
      </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  };
  

  const leftFaqList = faqList.slice(0, 4);
  const rightFaqList = faqList.slice(4, 8);

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <h1>FAQs</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {leftFaqList.map((faq, index) => renderAccordionItem(faq, index))}
              </Grid>
              <Grid item xs={12} sm={6}>
                {rightFaqList.map((faq, index) => renderAccordionItem(faq, index + 4))}
              </Grid>
            </Grid>
          </div>
        </section>
      );
    };
    
    export default Faq;
    