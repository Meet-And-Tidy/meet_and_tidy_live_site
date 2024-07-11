import { Link } from 'react-router-dom';
import DownloadButton from '../../Button/DownloadButton';
import Logo from '../../../assets/logo.png';

import { menuConfig } from '../menu.config';

const Navbar = () => {
  return (
    <>
      <nav className="inset-x-0 top-0 mx-auto flex max-w-7xl p-6 lg:px-8">
        <div className="flex-row items-center lg:flex lg:gap-x-12 lg:flex-1 uppercase">
          {menuConfig.map(({ text, url }) => (
            <Link key={text} to={url} className="text-lg font-semibold leading-6 text-gray-900">
              {text}
            </Link>
          ))}
        </div>
        <div className="flex-1">
          <img src={Logo} className="h-16" alt="logo" />
        </div>
        <DownloadButton />
      </nav>
    </>
  );
};

export default Navbar;
