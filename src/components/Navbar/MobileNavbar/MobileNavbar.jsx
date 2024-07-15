import Logo from '../../../assets/logo.png';

import Menu from './Menu/Menu';

export default function MobileNavbar() {
  return (
    <nav className="inset-x-0 top-0 mx-auto flex max-w-7xl p-6 h-30 bg-white">
      <div className="flex" />
      <div className="flex flex-grow">
        <img src={Logo} className="h-8" alt="logo" />
      </div>
      <Menu />
    </nav>
  );
}
