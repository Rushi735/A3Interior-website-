import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
// import NotFound from './Pages/NotFound'; // Uncomment if you have 404 page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Portfolio */}
        <Route path="/portfolio" element={<Portfolio />} />
        

        {/* Services */}
        <Route path="/services" element={<Services />} />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Page (Optional) */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
