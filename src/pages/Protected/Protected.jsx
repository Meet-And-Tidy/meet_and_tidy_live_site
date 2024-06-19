import './Protected.scss';

import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router-dom';

const Protected = () => {
  return (
    <div className="protected">
      <Breadcrumbs>
        <Link to="/protected">Protected</Link>
      </Breadcrumbs>
      <p>You are logged in so you can see this page</p>
    </div>
  );
};

export default Protected;
