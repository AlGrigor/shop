import { getWindowWidth } from '@/lib/utils/common';
import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  const handleResize = () => setWindowWidth(getWindowWidth());

  useEffect(() => {
    window.addEventListener('resize', handleResize, true);

    return () => window.removeEventListener('resize', handleResize, true);
  }, []);
  return { windowWidth, handleResize };
};

const useMediaQuery = (maxWidth: number) => {
  const {
    windowWidth: { windowWidth },
    handleResize,
  } = useWindowWidth();

  const [isMedia, setIsMedia] = useState(false);

  useEffect(() => {
    windowWidth >= maxWidth ? setIsMedia(true) : setIsMedia(false);
  }, [handleResize, maxWidth, windowWidth]);
  return isMedia;
};

export default useMediaQuery;
