import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="inset-x-0 top-0 mx-auto flex max-w-7xl p-6 lg:px-8">
        <div className="items-center lg:flex lg:gap-x-12 flex lg:flex-1">
          <Link className="text-sm font-semibold leading-6 text-gray-900" to="/">Home</Link>
          <Link className="text-sm font-semibold leading-6 text-gray-900" to="/about">About</Link>
          <Link className="text-sm font-semibold leading-6 text-gray-900" to="/contact">Contact Us</Link>
          <Link className="text-sm font-semibold leading-6 text-gray-900" to="/faqs">FAQs</Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <button className="lg:flex lg:gap-x-12 m-0 p-3 rounded-2xl bg-brandGreen hover:bg-brandGreenDark hover:text-white">
          Download the app
        </button>
      </nav>
    </>
  );
};

export default Navbar;