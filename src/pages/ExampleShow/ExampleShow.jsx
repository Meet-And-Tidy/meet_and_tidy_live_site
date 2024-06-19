import { Link, useParams } from 'react-router-dom';
import './ExampleShow.scss';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';

const ExampleShow = () => {
  const params = useParams();
  return (
    <div className="example-show">
      <Breadcrumbs>
        <Link to="/examples">Examples</Link>
        <Link to={`/examples/${params.id}`}>{params.id}</Link>
      </Breadcrumbs>
      <h2>Example {params.id}</h2>
    </div>
  );
};

export default ExampleShow;
