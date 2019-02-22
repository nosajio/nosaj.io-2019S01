import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../styled/theme';
import FormLabel from '../Forms/Label';

export interface FormInputProps {
  type?: 'text' | 'email' | 'textarea';
  label?: string;
  onChange(v: string): void;
  className?: string;
}

interface FormInputStyledProps {
  theme: Theme;
}

const inputBaseCSS = css`
  color: white;
  background: ${({ theme }) => theme.colors.blue.greyDark};
  border: 2px solid #726388;
  box-shadow: 0 5px 17px 1px rgba(49, 31, 75, 0.17);
  border-radius: 12px;
  font-size: ${({ theme }: FormInputStyledProps) => theme.ms.rem(1)};
  padding: ${({ theme }: FormInputStyledProps) => `${theme.ms.rem(-1)} 1rem`};
  width: 100%;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.purple.bright};
  }
`;

const InputFrame = styled.label`

`;
const InputField = styled.input`
  ${inputBaseCSS}
`;
const InputTextarea = styled.textarea`
  ${inputBaseCSS}
`;

const FormInput: React.FunctionComponent<FormInputProps> = ({
  onChange,
  label,
  className = '',
  type = 'text'
}) => {
  // Use hooks for state and onChange
  const [val, setVal] = React.useState('');
  React.useEffect(() => onChange(val), [val]);
  // Determine type of element to use for the field
  let Field: React.ReactElement<FormInputProps>;
  switch (type) {
    case 'textarea':
      Field = (
        <InputTextarea onChange={e => setVal(e.target.value)} value={val} />
      );
      break;
    default:
      Field = (
        <InputField
          type={type}
          value={val}
          onChange={e => setVal(e.target.value)}
        />
      );
  }
  return (
    <InputFrame className={className}>
      {label ? <FormLabel>{label}</FormLabel> : null}
      {Field}
    </InputFrame>
  );
};

export default FormInput;
