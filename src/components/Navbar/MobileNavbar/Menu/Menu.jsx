import { useState } from 'react';

import { ReactComponent as MenuIcon } from '../../../../assets/svg/menu.svg';
import { ReactComponent as XIcon } from '../../../../assets/svg/x.svg';
import { menuConfig } from '../../menu.config';
import { Link } from 'react-router-dom';

export default function Menu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(prev => !prev);

  return (
    <div className="relative px-4">
      <div onClick={toggleMenu} className="absolute z-20 cursor-pointer w-8 h-8">
        {open ? <XIcon /> : <MenuIcon />}
      </div>

      {open && (
        <div className="fixed top-0 left-0 w-dvw h-dvh bg-white z-10">
          <div className="flex flex-col items-center justify-center h-full">
            {menuConfig.map(({ text, url }) => (
              <Link key={text} to={url} className="text-xl font-semibold leading-6 text-gray-900">
                {text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
