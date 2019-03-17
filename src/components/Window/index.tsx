import * as React from 'react';
import useKeyboardInput from '../../hooks/useKeyboardInput';
import { addLockClass, removeLockClass } from '../../utils/bodyClassNames';
import noop from '../../utils/noop';
import { WindowFrame, WindowOverlay, WindowView } from './styled';

interface WindowProps {
  children: React.ReactNode;
  padding?: number | string;
  isGone?: boolean; // Move the window out of view
  onClose?(): void;
}

const Window: React.FunctionComponent<WindowProps> = ({
  children,
  isGone = false,
  padding = 2,
  onClose
}) => {
  addLockClass();
  const safeOnClose = () => {
    removeLockClass();
    {
      onClose ? onClose() : noop();
    }
  };
  const lastKeyUp = useKeyboardInput();
  if (lastKeyUp === 'escape') {
    safeOnClose();
  }
  return (
    <WindowView>
      <WindowOverlay onClick={() => safeOnClose()} />
      <WindowFrame withPadding={padding} isGone={isGone}>
        {children}
      </WindowFrame>
    </WindowView>
  );
};

export default Window;
