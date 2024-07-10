import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import ContactUs from '../pages/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';

const App = () => {
  return (
    <div>    
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
