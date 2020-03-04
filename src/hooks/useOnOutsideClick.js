import { useEffect, useRef } from 'react'

const useOnClickOutside = ($refIgnorable, handler, canListen = true, $refNonIgnorable) => {
    const $targetRef = useRef();

    useEffect(() => {
        if (!handler) { return }
        const handleMouseDown = e => $targetRef.current = e.target;

        const handleMouseUp = e => {
          if (!$refIgnorable.current || $refIgnorable.current.contains($targetRef.current) || $refIgnorable.current.contains(e.target)) {
            return;
          }
          handler(e);
        };

        const $listener = ($refNonIgnorable || {}).current || document;

        if (canListen) {
            $listener.addEventListener('mousedown', handleMouseDown);
            $listener.addEventListener('mouseup', handleMouseUp);
            $listener.addEventListener('touchstart', handleMouseDown);
            $listener.addEventListener('touchend', handleMouseUp);
        }

        return () => {
            $listener.removeEventListener('mousedown', handleMouseDown);
            $listener.removeEventListener('mouseup', handleMouseUp);
            $listener.removeEventListener('touchstart', handleMouseDown);
            $listener.removeEventListener('touchend', handleMouseUp);
        };
      },
      [ $refIgnorable, handler, canListen, $refNonIgnorable ]
    );
}

export default useOnClickOutside;