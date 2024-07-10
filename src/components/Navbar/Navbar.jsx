import { Link } from "react-router-dom";
import DownloadButton from "../Download/DownloadButton";
import Logo from "../../assets/logo.png"

const Navbar = () => {  
  return (
    <>
      <nav className="inset-x-0 top-0 mx-auto flex max-w-7xl p-6 lg:px-8">
        <div className="flex-row items-center lg:flex lg:gap-x-12 lg:flex-1 uppercase">
          <Link className="text-xl font-semibold leading-6 text-gray-900" to="/">Home</Link>
          <Link className="text-xl font-semibold leading-6 text-gray-900" to="/about">About</Link>
        </div>
        <div className="flex-1"><img src={Logo} className="h-16" alt="logo" /></div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <DownloadButton />
      </nav>
    </>
  );
};

export default Navbar;