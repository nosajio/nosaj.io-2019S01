import * as React from 'react';
import FormLabel from '../Forms/Label';
import { SelectorFrame, SelectorOptions, SelectorSelectable } from './styled';
import noop from '../../utils/noop';

type FormSelectorSelectable = {
  label: string;
  value: string | boolean | number | null;
};

interface FormSelectorProps {
  className?: string;
  label: string;
  options: FormSelectorSelectable[];
}

const FormSelector: React.FunctionComponent<FormSelectorProps> = ({
  label,
  options,
  className
}) => {
  const [selectedState, setSelectedState] = React.useState(options[0]);
  return (
    <SelectorFrame className={className}>
      <FormLabel>{label}</FormLabel>
      <SelectorOptions>
        {options.map(o => (
          <SelectorSelectable
            tabIndex="0"
            key={`selectable-${o.value}`}
            onClick={() => setSelectedState(o)}
            onKeyUp={(e: React.KeyboardEvent) =>
              (e.key === 'Enter' || e.key === ' ') && setSelectedState(o)
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
