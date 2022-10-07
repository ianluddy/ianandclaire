import styled from 'styled-components';
import theme from '../themes/default';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Wrapper = styled.div`
  margin-top: 3rem;
  display: none;
  
  @media (${theme.devices.md}) {
    display: block;
  }
`;

const LinkWrapper = styled.div`
  display: inline-block;
  margin: 0 0.5rem;
  text-transform: uppercase;
  padding: 0.5rem;
  letter-spacing: 1.5px;
  line-height: 1;
  font-size: 18px;
  a {
    transition: color ${theme.transitionTime};
    text-decoration: none;
    color: ${theme.text};
    &:hover {
      color: ${theme.textLight};
    }
  }
`;

export default function Menu() {
  return (
    <Wrapper>
      <LinkWrapper>
        <AnchorLink href="#the-big-day">
          The Big Day
        </AnchorLink>
      </LinkWrapper>
      <LinkWrapper>
        <AnchorLink href="#day-two">
          Day Two
        </AnchorLink>
      </LinkWrapper>
      <LinkWrapper>
        <AnchorLink href="#accommodation">
          Accommodation
        </AnchorLink>
      </LinkWrapper>
      <LinkWrapper>
        <AnchorLink href="#rsvp">
          Rsvp
        </AnchorLink>
      </LinkWrapper>
    </Wrapper>
  );
}
