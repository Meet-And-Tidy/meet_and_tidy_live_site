import useBreakpoints from '../../hooks/useBreakpoints/useBreakpoints';
import DesktopNavbar from './DesktopNavbar/DesktopNavbar';
import MobileNavbar from './MobileNavbar/MobileNavbar';

export default function Navbar() {
  const { isDesktop } = useBreakpoints();
  return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
}
