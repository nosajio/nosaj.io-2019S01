import * as React from 'react';
import noop from '../../utils/noop';
import {
  SlickField,
  SlickFieldUnderline,
  SlickInputFrame,
  SlickInputLabel
} from './styled';

interface SlickInputProps {
  label?: string;
  grow?: boolean; // For textarea fields; grow height with lines. similar to how chat apps work
  name: string;
  type: 'textarea' | 'text' | 'email';
  onChange: (v: string) => void;
  className?: string;
}

const elementType = (t: SlickInputProps['type']) => {
  let inputType = '',
    el = '';
  switch (t) {
    case 'email': {
      el = 'input';
      inputType = 'email';
      break;
    }
    case 'textarea': {
      el = 'textarea';
      inputType = '';
      break;
    }
    default: {
      el = 'input';
      inputType = 'text';
    }
  }
  return { inputType, el };
};

const SlickInput: React.FunctionComponent<SlickInputProps> = ({
  label,
  grow = false,
  type,
  onChange,
  className
}) => {
  const [active, setActive] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');
  const [rowCount, setRowCount] = React.useState<number>(grow ? 1 : 0);
  React.useEffect(() => {
    onChange ? onChange(value) : noop();
  }, [value]);
  const { el, inputType } = elementType(type);

  const handleChange = (e: React.ChangeEvent<any>) => {
    setValue(e.target.value);
    if (grow) {
      setRowCount(String(e.target.value).split(/\r*\n/).length);
    }
  };
  return (
    <SlickInputFrame className={className}>
      {label && (
        <SlickInputLabel isHighlighted={active} isBig={!active && !value}>
          {label}
        </SlickInputLabel>
      )}
      <SlickField
        tabIndex="0"
        withElement={el}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        onChange={(e: React.ChangeEvent) => handleChange(e)}
        type={inputType || undefined}
        rows={rowCount || undefined}
      />
      <SlickFieldUnderline isHighlighted={active} />
    </SlickInputFrame>
  );
};

export default SlickInput;
