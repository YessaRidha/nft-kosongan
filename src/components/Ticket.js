import { useState } from 'react';
import './Ticket.css'
import Rating from '@mui/material/Rating';
import React from 'react';
import { Modal } from 'react-bootstrap';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Alert from '@mui/material/Alert';
import { Stack as MUIStack } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';
import Pagination from '@mui/material/Pagination';
import Autocomplete from "@mui/material/Autocomplete";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Ticket = () => {
  const [tickets, setTickets] = useState([
    {
      images: ["lenovo-1.png", "lenovo-2.png", "lenovo-3.png", "lenovo-4.png", "lenovo-5.png"],
      Name: "Lenovo A7000",
      Layar: "5.5",
      ResolusiLayar: "720 x 1280pixels",
    },
  ]);

  const [pilihan, setPilihan] = useState({
    warna: 'Merah',
    ram: '4GB'
  });

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [value, setValue] = useState(2);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);

  const handleBuyClick = (ticketNama) => {
    setShowSuccessAlert(true);
  };

  const handleDetailsClick = (ticket) => {
    setSelectedTicket(ticket);
  }

  const handleModalClose = () => {
    setSelectedTicket(null);
  }

  const handleAddToCartClick = (ticket) => {
    setSelectedTicket();
    setShowAddToCartModal(true);

    
  };
  
  const handleAddToCartModalClose = () => {
    setShowAddToCartModal(false);
  };

  const sale = [
    { label: "Whitelist" },
    { label: "Pre-Sale"},
    { label: "Public Sale"},
    { label: "Give-away"}

  ];

  const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
      code: 'AE',
      label: 'United Arab Emirates',
      phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
      code: 'AG',
      label: 'Antigua and Barbuda',
      phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
      code: 'AU',
      label: 'Australia',
      phone: '61',
      suggested: true,
    },
    { code: 'AW', label: 'Aruba', phone: '297' },
    { code: 'AX', label: 'Alland Islands', phone: '358' },
    { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    {
      code: 'BA',
      label: 'Bosnia and Herzegovina',
      phone: '387',
    }
  ] 


  return (
    <section className="ticket" id="ticket">
      <div className="container">
      <div className="row" style={{ justifyContent: 'center' }}>
      <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={[]}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Even Title" />}
        />
              <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={sale}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Sale Type" />}
            />
            <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Locations"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', 
                }}
              />
            )}
          />
          </div>
          <div className="row mx-auto">
          {tickets.map((ticket, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div className="card mr-2 ml-2" style={{ width: '15rem' }}>
              <Carousel fade>
              {ticket.images.map((image, imageIndex) => (
                <Carousel.Item key={imageIndex}>
                  <img src={`/${image}`} className="card-img-top" alt={`Product Image ${imageIndex + 1}`} 
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <h5 className="card-title">{ticket.Name}</h5>
                  <p className="card-text">{ticket.price}</p>
                  <div className="mt-auto">
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>
                  <div className="mt-auto">
                    <button className="btn btn-success me-1" onClick={() => handleAddToCartClick(ticket)}>
                      <LocalMallIcon />
                    </button>
                    <button className="btn btn-secondary me-1" onClick={() => handleDetailsClick(ticket)}>Details</button>
                    <button className="btn btn-primary me-1" onClick={() => handleBuyClick(ticket.name)}>Beli</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
        <div className="col d-flex justify-content-center">
        <MUIStack spacing={2}>
          <Pagination count={10} style={{ backgroundColor: 'white' }} />
          </MUIStack>
        </div>
      </div>
    {showSuccessAlert && (
      <div className="alert-overlay">
      </div>
    )}
      </div>
      {selectedTicket && (
        <Modal show={handleDetailsClick} onHide={handleModalClose}>
        <Modal.Header >
        <Modal.Title>Details Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '300px', overflowY: 'auto' }}>
        <div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group">
      <a class="list-group-item list-group-item-action" href="#list-item-1">Tampilan</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Kamera</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">Memori</a>
      <a class="list-group-item list-group-item-action" href="#list-item-4">Desain</a>
      <a class="list-group-item list-group-item-action" href="#list-item-4">Baterai</a>
      <a class="list-group-item list-group-item-action" href="#list-item-4">Platform</a>
      <a class="list-group-item list-group-item-action" href="#list-item-4">Desain</a>

    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="list-item-1"></h4>
        <p>Layar : {selectedTicket.Layar}</p>
        <p>Resolusi Layar : {selectedTicket.ResolusiLayar}</p>
        <p>Layar : {selectedTicket.Layar}</p>
        <p>Anti Air : {selectedTicket.AntiAir}</p>
        <p>Harga : {selectedTicket.Harga}</p>
        <p>Teknologi Layar : {selectedTicket.TeknologiLayar}</p>
    </div>
  </div>
</div>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        )}
        <Modal show={showAddToCartModal} onHide={handleAddToCartModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedTicket?.Nama} ({pilihan.warna}, {pilihan.ram}) .</p>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>          
    </section>
  )
}
