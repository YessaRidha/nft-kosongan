import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Product } from "./components/Product";
import Footer from './components/Footer';
import Faq from './components/Faq';
import { Contact } from './components/Contact';
import { Ticket } from './components/Ticket';
import {Login} from './components/Login';
import CustomizedTimeline from './components/Timeline';
import ActionAreaCard from './components/Galery';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const MainContent = () => {
  return (
    <>
      <ActionAreaCard/>
      <CustomizedTimeline />
      <Faq />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
