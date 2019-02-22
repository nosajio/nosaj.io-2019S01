import styled from 'styled-components';

const FormLabel = styled.div`
  font: ${({ theme }) =>
    `${theme.fonts.c.weight.bold} ${theme.ms.rem(1)} ${theme.fonts.c.family}`};
  margin-bottom: ${({ theme }) => theme.ms.rem(-2)};
`;

export default FormLabel;
