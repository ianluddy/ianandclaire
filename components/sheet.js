import styled from 'styled-components';
import theme from '../themes/default';

const Sheet = styled.div`
  padding: 1.5rem 0 2rem;
  box-shadow: 0px 0px 6px 2px #ccc;
  margin: 10px auto;
  max-width: 575px;
  text-align: center;
  border-radius: 4px;
`;

export default function ({ children, ...props }) {
  return (
    <Sheet {...props}>
      {children}
    </Sheet>
  );
}
