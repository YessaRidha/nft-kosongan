import React, { useEffect } from "react";
import './Page2.css';
import about from '../Images/about.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Page2() {
  useEffect(() => {
    AOS.init({
      once: true, // Only run the animation once
    });
  }, []);

  return (
    <div className="Page2">
      <div>
        <h1 className="headpage2" data-aos="fade-right">Change the way you build <br/> websites Forever.</h1>
        <p data-aos="fade-right">In case you are starting a business or launching any product in the market, <br />
        Using the available pages you can quickly get started in a day with your <br /> website.
        The design quality is polished very well, it looks very professional.</p>
      </div>
      <div className="cal-container">
        <img 
          src={about} 
          alt="Image"
        />
      </div>
    </div>
  );
}

export default Page2;
