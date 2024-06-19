import { renderWithRouter } from '../../utils/testHelper/testHelper';
import Breadcrumbs from './Breadcrumbs';
import { Link } from 'react-router-dom';

describe('Breadcrumbs', () => {
  test('should render', () => {
    const { getByText } = renderWithRouter(
      <Breadcrumbs>
        <div>barney</div>
      </Breadcrumbs>,
    );
    expect(getByText('barney')).toBeTruthy();
  });

  test('should not render without a message', async () => {
    const { findByText } = renderWithRouter(
      <Breadcrumbs>
        <div>barney</div>
      </Breadcrumbs>,
    );
    expect(await findByText('barney')).toBeTruthy();
  });

  test('should not render home arrow if no links', () => {
    const { queryByText } = renderWithRouter(<Breadcrumbs></Breadcrumbs>);
    expect(queryByText('>')).toBeFalsy();
  });

  test('should render home arrow if a link is present in children', () => {
    const { getAllByText } = renderWithRouter(
      <Breadcrumbs>
        <Link to={'/somewhere'} />
      </Breadcrumbs>,
    );

    expect(getAllByText('>')).toHaveLength(1);
  });

  test('renders > for all but last item', () => {
    const { getAllByText } = renderWithRouter(
      <Breadcrumbs>
        <Link to={'/somewhere'} />
        <Link to={'/somewhere'} />
      </Breadcrumbs>,
    );
    expect(getAllByText('>')).toHaveLength(2);
  });
});
