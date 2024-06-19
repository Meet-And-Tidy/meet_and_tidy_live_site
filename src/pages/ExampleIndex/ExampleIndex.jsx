import { Link } from 'react-router-dom';
import './ExampleIndex.scss';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';

const ExampleIndex = () => {
  return (
    <div className="examples">
      <Breadcrumbs>
        <Link to={'/examples'}>Examples</Link>
      </Breadcrumbs>
      <h2>Select an Example</h2>
      {Array.apply(null, Array(20)).map((_, i) => (
        <Link key={i} to={`/examples/${i}`}>
          Example {i}
        </Link>
      ))}
    </div>
  );
};

export default ExampleIndex;
