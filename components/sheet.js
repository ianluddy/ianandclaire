import styled from 'styled-components';
import theme from '../themes/default';

const Sheet = styled.div`
  padding: 1.5rem 0 2rem;
  box-shadow: 2px 2px 12px 2px #ccc;
  margin: 10px auto;
  max-width: 575px;
  text-align: center;
`;

export default function ({ children, ...props }) {
  return (
    <Sheet {...props}>
      {children}
    </Sheet>
  );
}
