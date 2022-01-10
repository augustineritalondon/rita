import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Navbar, Home, About, Services, Port, Contact, Footer } from './components/'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/port" element={<Port />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
