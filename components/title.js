import styled from 'styled-components';
import theme from '../themes/default';
import Wrapper from './wrapper';

const Title = styled(Wrapper)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  img {
    width: 20px !important;
    @media (${theme.devices.xs}) {
      width: 28px !important;
    }
    @media (${theme.devices.sm}) {
      width: 35px !important;
    }
    @media (${theme.devices.md}) {
      width: 40px !important;
    }
  }
  @media (${theme.devices.md}) {
    max-width: 450px;
  }
`;

export default function ({ children, ...props }) {
  return (
    <Title {...props}>
      {children}
    </Title>
  );
}
