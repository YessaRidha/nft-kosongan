import { useState } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import './Contact.css';
import { Email } from "@mui/icons-material";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nama, setNama] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleNamaChange = (e) => {
    setNama(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nama: ${nama}, Email: ${email}, Message: ${message}`);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Nama
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Masukkan nama Anda"
                value={nama}
                onChange={handleNamaChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Komentar
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Tuliskan pesanmu"
                rows="3"
                value={message}
                onChange={handleMessageChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Kirim
            </button>
          </form>
        </div>
        <div className="contact-info-container">
        <div className="contact-info">
      </div>
          <div className="contact-info">
            <EmailIcon /> bonaventurayuan202@gmail.com
          </div>
          <div className="contact-info">
            <p>
              <WhatsAppIcon /> +62 34567890
            </p>
          </div>
          <div className="contact-info">
            <HomeIcon /> Yogyakarta, Indonesia 1234
            </div>
            <div className="contact-info">
            <InstagramIcon /> test
            </div>
        </div>
      </div>
    </section>
  );
};
