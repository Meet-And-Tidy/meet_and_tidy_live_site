import { Link } from 'react-router-dom';
import './FAQs.scss';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';

const FAQs = () => {
  return (
    <div className="faqs">
      <Breadcrumbs>
        <Link to={'/faqs'}>FAQs</Link>
      </Breadcrumbs>
    </div>
  );
};

export default FAQs;
