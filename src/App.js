import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import Footer from './components/Footer';
import Faq from './components/Faq';
import CustomizedTimeline from './components/Timeline';
import ActionAreaCard from './components/Galery';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Homepage from './components/Homepage';
import Page2 from './components/Page2';
import Featured from './components/Featured';

const MainContent = () => {
  return (
    <>
      <Homepage/>
      <Page2/>
      <Featured/>
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
