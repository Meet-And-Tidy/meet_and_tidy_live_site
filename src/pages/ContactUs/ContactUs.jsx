import { Link } from 'react-router-dom';
import './ContactUs.scss';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';

const ContactUs = () => {
  return (
    <div className="contact">
      <Breadcrumbs>
        <Link to={'/contact'}>ContactUs</Link>
      </Breadcrumbs>
    </div>
  );
};

export default ContactUs;
