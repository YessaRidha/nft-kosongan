import { useState } from 'react';
import './Product.css'
import Rating from '@mui/material/Rating';
import React from 'react';
import { Modal } from 'react-bootstrap';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Carousel from 'react-bootstrap/Carousel';


export const Product = () => {
  const [products, setProducts] = useState([
    {
      images: ["lenovo-1.png", "lenovo-2.png", "lenovo-3.png", "lenovo-4.png", "lenovo-5.png"],
      Name: "Lenovo A7000",
      Layar: "5.5",
      ResolusiLayar: "720 x 1280pixels",
      AntiAir:	"Tidak",
      TeknologiLayar: "IPS-LCD",
      KameraUtama: "8MP",
      KameraSelfie:	"5MP",
      TipeKamera:	"Single Kamera",
      ResolusiVideo: 	"Full HD",
      Penyimpanan: "8GB",
      Chipset: "Mediatek MT6752m",
      KapasitasBaterai: "2900mAh",
      Berat: "140g",
      Harga: "Rp. 785.000"
    },
  ]);

  const [pilihan, setPilihan] = useState({
    warna: 'Merah',
    ram: '4GB'
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [value, setValue] = useState(2);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);

  const handleBuyClick = (productNama) => {
    setShowSuccessAlert(true);
  };

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
  }

  const handleModalClose = () => {
    setSelectedProduct(null);
  }

  const handleAddToCartClick = (product) => {
    setSelectedProduct();
    setShowAddToCartModal(true);

    
  };
  
  const handleAddToCartModalClose = () => {
    setShowAddToCartModal(false);
  };

  return (
    <section className="product" id="home">
      <div className="container">
          <div className="row mx-auto">
          {products.map((product, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div className="card mr-2 ml-2" style={{ width: '15rem' }}>
              <Carousel fade>
              {product.images.map((image, imageIndex) => (
                <Carousel.Item key={imageIndex}>
                  <img src={`/${image}`} className="card-img-top" alt={`Product Image ${imageIndex + 1}`} 
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <h5 className="card-title">{product.Name}</h5>
                  <p className="card-text">{product.price}</p>
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
                    <button className="btn btn-success me-1" onClick={() => handleAddToCartClick(product)}>
                      <LocalMallIcon />
                    </button>
                    <button className="btn btn-secondary me-1" onClick={() => handleDetailsClick(product)}>Details</button>
                    <button className="btn btn-primary me-1" onClick={() => handleBuyClick(product.name)}>Beli</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    {showSuccessAlert && (
      <div className="alert-overlay">
        <Stack
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999
          }}
          spacing={2}
        >
          <Alert
            onClose={() => setShowSuccessAlert(false)}
            severity="success"
            sx={{ width: '100%', maxWidth: 400 }}
          >
            Pembelian Berhasil !
          </Alert>
        </Stack>
      </div>
    )}
      </div>
      {selectedProduct && (
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
        <p>Layar : {selectedProduct.Layar}</p>
        <p>Resolusi Layar : {selectedProduct.ResolusiLayar}</p>
        <p>Layar : {selectedProduct.Layar}</p>
        <p>Anti Air : {selectedProduct.AntiAir}</p>
        <p>Harga : {selectedProduct.Harga}</p>
        <p>Teknologi Layar : {selectedProduct.TeknologiLayar}</p>
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
          <p>{selectedProduct?.Nama} ({pilihan.warna}, {pilihan.ram}) .</p>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>          
    </section>
  )
}
