import * as React from 'react';
import FormLabel from '../Forms/Label';
import { SelectorFrame, SelectorOptions, SelectorSelectable } from './styled';
import noop from '../../utils/noop';

type FormSelectorSelectable = {
  label: string;
  value: string | boolean | number | null;
};

interface FormSelectorProps {
  name: string;
  className?: string;
  onChange?: (v: FormSelectorSelectable) => void;
  label: string;
  options: FormSelectorSelectable[];
}

const FormSelector: React.FunctionComponent<FormSelectorProps> = ({
  label,
  options,
  onChange,
  className
}) => {
  const [selectedState, setSelectedState] = React.useState(options[0]);
  const selectOption = (o: FormSelectorSelectable) => {
    setSelectedState(o);
    onChange ? onChange(o) : noop();
  };
  return (
    <SelectorFrame className={className}>
      <FormLabel>{label}</FormLabel>
      <SelectorOptions>
        {options.map(o => (
          <SelectorSelectable
            tabIndex="0"
            key={`selectable-${o.value}`}
            onClick={() => selectOption(o)}
            onKeyUp={(e: React.KeyboardEvent) =>
              (e.key === 'Enter' || e.key === ' ') && selectOption(o)
            }
            isSelected={o.value === selectedState.value}
          >
            {o.label}
          </SelectorSelectable>
        ))}
      </SelectorOptions>
    </SelectorFrame>
  );
};

export default FormSelector;
