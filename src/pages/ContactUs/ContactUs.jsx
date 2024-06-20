import { Link } from 'react-router-dom';
import './ContactUs.scss';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <div className="contact">
      <Breadcrumbs>
        <Link to={'/contact'}>ContactUs</Link>
      </Breadcrumbs>
      <h2>Get in touch</h2>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
