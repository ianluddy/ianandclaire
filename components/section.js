import theme from '../themes/default';
import styled from 'styled-components';

const Section = styled.section`
  padding: ${(props) => (props.fullWidth ? '2rem 0' : '2rem 1rem')};
  @media (${theme.devices.md}) {
    padding: 3rem 0;
    margin: ${(props) => (props.fullWidth ? '0 -32px' : '0')};  
  }
`;

export default function ({ children, id, fullWidth }) {
  return (
    <Section id={id} fullWidth={fullWidth}>
      {children}
    </Section>
  );
}
