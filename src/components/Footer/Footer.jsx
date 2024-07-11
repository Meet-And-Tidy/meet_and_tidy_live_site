import appleStore from '../../assets/app-store.png';
import googleStore from '../../assets/google-store.png';

import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';

const Footer = () => {
  return (
    <>
      <footer className="-mb-3 uppercase text-white inset-x-0 h-[275px] text-center w-full py-4 bg-brandDarkGreen static bottom-0">
        <div className="mt-5 flex justify-center space-x-10">
          <a href="faqs.html#" className="">
            <span className="sr-only">Facebook</span>
            <FacebookIcon />
          </a>
          <a href="instagram.com/meetandtidy" className="">
            <span className="sr-only">Instagram</span>
            <InstagramIcon />
          </a>
          <a href="faqs.html#" className="">
            <span className="sr-only">GitHub</span>
            <GithubIcon />
          </a>
        </div>

        <div className="mt-10 pb-6 flex justify-center space-x-10">
          <img src={appleStore} alt="apple store" className="h-12" />
          <img src={googleStore} alt="google store" className="h-12" />
        </div>
        <p className="mt-5 text-center text-md leading-5 text-white">
          &copy; 2024 Meet&Tidy, Inc. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
