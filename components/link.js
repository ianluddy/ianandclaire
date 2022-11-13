import styled from 'styled-components';
import theme from '../themes/default';

const Link = styled.a`
  margin-top: 1rem;
  text-transform: lowercase;
  color: black;
  display: block;
  opacity: 0.5;
  text-decoration: none;
`;

export default function ({ children }) {
  return <Link>{children}</Link>;
}
