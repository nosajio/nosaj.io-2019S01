import * as React from 'react';
import { WindowFrame, WindowOverlay } from './styled';
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
    <WindowOverlay onClick={() => safeOnClose()}>
      <WindowFrame
        onClickCapture={(e: React.SyntheticEvent) => e.stopPropagation()}
      >
        {children}
      </WindowFrame>
    </WindowOverlay>
  );
};

export default Window;
