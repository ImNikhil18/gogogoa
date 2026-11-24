import { useEffect } from 'react';

const ImagePreloader = ({ images }) => {
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };

    // Preload on idle or after component mounts
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadImages);
    } else {
      setTimeout(preloadImages, 100);
    }
  }, [images]);

  return null;
};

export default ImagePreloader;