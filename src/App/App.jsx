import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../common/Navbar/Navbar';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import ContactUs from '../pages/ContactUs/ContactUs';
import FAQs from '../pages/FAQs/FAQs';
import Footer from '../common/Footer/Footer';

const App = () => {
  return (
    <div className='main'>    
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faqs" element={<FAQs />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
};

export default App;
