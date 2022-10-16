import styled from 'styled-components';
import theme from '../themes/default';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import BaseWrapper from './wrapper';

const Wrapper = styled(BaseWrapper)`
  margin-top: 3rem;
`;

const Link = styled.div`
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
    <Wrapper hideMobile={"true"}>
      <Link>
        <AnchorLink href="#the-big-day">
          The Big Day
        </AnchorLink>
      </Link>
      <Link>
        <AnchorLink href="#day-two">
          Day Two
        </AnchorLink>
      </Link>
      <Link>
        <AnchorLink href="#accommodation">
          Accommodation
        </AnchorLink>
      </Link>
      <Link>
        <AnchorLink href="#rsvp">
          Rsvp
        </AnchorLink>
      </Link>
    </Wrapper>
  );
}
