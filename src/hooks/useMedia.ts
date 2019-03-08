import { useState, useEffect } from 'react';
import { matchMedia, MediaQueryRules } from '../styled/mediaqueries';
import noop from '../utils/noop';

// useMedia is a hook to use matchMedia functionality
const useMedia = (rule: MediaQueryRules): boolean => {
  const [matches, setMatches] = useState<boolean>(false);
  const mq = matchMedia(rule);
  const eventHandler = (e: MediaQueryListEvent) => {
    matches !== e.matches ? setMatches(e.matches) : noop();
  };
  useEffect(() => {
    mq.addListener(eventHandler);
    return () => mq.removeListener(eventHandler);
  }, [matches]);
  return matches;
};

export default useMedia;
