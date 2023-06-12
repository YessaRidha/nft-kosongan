import './Homepage.css';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { Button } from '@mui/material';
import homeimg2 from '../assets/homeimg2.png';

function Homepage() {
  return (
    <div className="Homepage">
      <div className="content">
        <h1>The World's <br />
          Most Powerful Event <br />
          Ticketing Platform.
        </h1>

        <p>Nftikets is the complete solution to online ticketing for any type of live and virtual event.</p>

        <div className='btn'>
        <Button variant="contained" endIcon={<CallMadeIcon />}>Explore</Button>
        </div>
      </div>
      <div className="img-container">
        <img 
          src={homeimg2} 
          alt="Image"
        />
      </div>
    </div>
  );
}

export default Homepage;
