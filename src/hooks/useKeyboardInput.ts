import { useEffect, useState } from 'react';

// useKeyboardInput is a simple interface for components to subscribe to
// keyboard events. This hook will always return the last key returned from
// a 'keyup' event.
const useKeyboardInput = (): string | null => {
  const [lastKeyUp, setLastKeyUp] = useState<string | null>(null);

  const handleKeyUp = (e: KeyboardEvent) =>
    setLastKeyUp(!e.key ? null : String(e.key).toLowerCase());

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, true);
    return () => {
      window.removeEventListener('keyup', handleKeyUp, true);
    };
  }, []);
  
  return lastKeyUp;
};

export default useKeyboardInput;
