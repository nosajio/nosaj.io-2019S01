import * as React from 'react';
import { WindowFrame, WindowOverlay, WindowView } from './styled';
import useKeyboardInput from '../../hooks/useKeyboardInput';
import noop from '../../utils/noop';

interface WindowProps {
  children: React.ReactNode;
  isGone?: boolean; // Move the window out of view
  onClose?(): void;
}

const Window: React.FunctionComponent<WindowProps> = ({
  children,
  isGone = false,
  onClose
}) => {
  const safeOnClose = onClose ? onClose : noop;
  const lastKeyUp = useKeyboardInput();
  if (lastKeyUp === 'escape') {
    safeOnClose();
  }
  return (
    <WindowView>
      <WindowOverlay onClick={() => safeOnClose()} />
      <WindowFrame isGone={isGone}>{children}</WindowFrame>
    </WindowView>
  );
};

export default Window;
