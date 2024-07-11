import { useMediaQuery } from 'react-responsive';

export default function useBreakpoints() {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return { isMobile, isTablet, isDesktop };
}
