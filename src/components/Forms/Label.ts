import styled from 'styled-components';

const FormLabel = styled.div`
  font-size: ${({ theme }) => theme.ms.rem(1)};
  margin-bottom: ${({ theme }) => theme.ms.rem(-2)};
  color: ${({ theme }) => theme.colors.grey};
`;

export default FormLabel;
