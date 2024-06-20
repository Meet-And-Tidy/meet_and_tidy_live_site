import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../common/Layout/Layout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import ContactUs from '../pages/ContactUs/ContactUs';
import FAQs from '../pages/FAQs/FAQs';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
