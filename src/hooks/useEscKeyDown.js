import { useEffect } from 'react';
import { KEY_CODES } from '../constants';

const useOnEscapeKeyDown = (onEscapeKeyDown, canListen = true) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === KEY_CODES.ESCAPE) {
        onEscapeKeyDown();
      }
    };

    if (canListen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onEscapeKeyDown, canListen]);
};

export default useOnEscapeKeyDown;