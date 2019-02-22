import * as React from 'react';
import { WindowFrame, WindowOverlay, WindowView } from './styled';
import useKeyboardInput from '../../hooks/useKeyboardInput';
import noop from '../../utils/noop';

interface WindowProps {
  children: React.ReactNode;
  onClose?(): void;
}

const Window: React.FunctionComponent<WindowProps> = ({
  children,
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
      <WindowFrame>{children}</WindowFrame>
    </WindowView>
  );
};

export default Window;
