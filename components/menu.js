import styled from 'styled-components';
import theme from '../themes/default';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';

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
  font-weight: 500;
  border-bottom: ${(props) => (props.active ? `2px solid ${theme.primary}` : '2px solid transparent')};

  a {
    text-decoration: none;
    color: ${theme.primary};
  }
`;

const Anchor = function({ href, active, children }) {
  const router = useRouter();
  return (
    <LinkWrapper active={active}>
      <Link href={href}>
        {children}
      </Link>
    </LinkWrapper>
  );
}

export default function Menu() {
  return (
    <Wrapper>
      <Anchor href="#the-big-day" active="true">The Big Day</Anchor>
      <Anchor href="#day-two">Day Two</Anchor>
      <Anchor href="#accommodation">Accommodation</Anchor>
      <Anchor href="#rsvp">RSVP</Anchor>
    </Wrapper>
  );
}
