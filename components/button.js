import styled from 'styled-components';
import theme from '../themes/default';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Button = styled.button`
  transition: background-color ${theme.transitionTime};
  font-family: ${theme.fontButton};
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  letter-spacing: 2px;
  font-weight: normal;
  border-style: none;
  box-sizing: border-box;
  line-height: 1rem;
  list-style: none;
  outline: none;
  vertical-align: baseline;
  user-select: none;
  touch-action: manipulation;
  cursor: pointer;
  background-color: ${theme.primary};
  color: ${theme.body};
  &:hover {
    background-color: ${theme.primaryLight};
  }
  font-size: 1rem;
  padding: 10px 18px;

  @media (${theme.devices.md}) {
    font-size: 1.2rem;
    padding: 14px 22px;
  }
}
`;

export const AnchorButton = function (props) {
  return (
    <AnchorLink href={props.href}>
      <Button
        onClick={props.onClick}
        type={props.type}
        large={props.large}
        secondary={props.secondary}
        wide={props.wide}
        nomargin={props.nomargin}
      >
        {props.text}
      </Button>
    </AnchorLink>
  );
}

export const LinkButton = function (props) {
  return (
    <Link href={props.href}>
      <Button
        onClick={props.onClick}
        type={props.type}
        large={props.large}
        secondary={props.secondary}
        wide={props.wide}
        nomargin={props.nomargin}
      >
        {props.text}
      </Button>
    </Link>
  );
}
