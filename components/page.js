import styled from 'styled-components';
import theme from '../themes/default';

const Page = styled.div`
  text-align: center;
`;

export default function ({ children }) {
  return <Page>{children}</Page>;
}
