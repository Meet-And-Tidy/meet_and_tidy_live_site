import { Link } from 'react-router-dom';
import './About.scss';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';

const About = () => {
  return (
    <div className="about">
      <Breadcrumbs>
        <Link to={'/about'}>About</Link>
      </Breadcrumbs>
    </div>
  );
};

export default About;
