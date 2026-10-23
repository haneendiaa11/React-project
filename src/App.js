import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';
import CustomCard from './Components/Card/Card';
import Section from './Components/Section/Section';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About/About';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <CustomCard />
              <Section/>
            </Container>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);
}

export default App;
