import theme from '../themes/default';
import styled from 'styled-components';
import Subtitle from '../components/subtitle';

const Event = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid rgba(67,126,146,15%);
  flex-direction: column;
  @media (${theme.devices.md}) {
    flex-direction: row;
  }
  p {
    margin: 0 auto;
  }
`;

const Italic = styled.div`
  letter-spacing: 1px;
  font-size: 1.6em;
  font-weight: normal;
  text-transform: none;
  font-style: italic;
  margin-bottom: 1rem;
`;

const Time = styled.div`
  padding: 1rem 1rem 0rem 1rem;
  @media (${theme.devices.md}) {
    padding: 2rem;
    width: 50%;
    text-align: right;
  }
`;

const Desc = styled.div`
  padding: 1rem 1rem 2rem 1rem;
  @media (${theme.devices.md}) {
    padding: 2rem;
    width: 50%;
    text-align: left;
  }
`;

export default function ({ children, hide, padding }) {
  return (
    <>
      <h2>The Big Day</h2>
      <Subtitle>Friday Feb 3, 2023</Subtitle>
      <Event>
        <Time>
          <Italic>15:30</Italic>
        </Time>
        <Desc>
          <Italic> We Do </Italic>
          <p> City Hall <br/> Dame Street, Dublin </p>
        </Desc>
      </Event>
      <Event>
        <Time>
          <Italic>16:30</Italic>
        </Time>
        <Desc>
          <Italic> We Drink </Italic>
          <p> The Stag's Head <br/> 1 Dame Court, Dublin </p>
        </Desc>
      </Event>
      <Event>
        <Time>
          <Italic>18:30</Italic>
        </Time>
        <Desc>
          <Italic> We Dine </Italic>
          <p> Fallon & Byrne <br/> 17 Exchequer Street, Dublin </p>
        </Desc>
      </Event>
      <Event>
        <Time>
          <Italic>21:30</Italic>
        </Time>
        <Desc>
          <Italic> We Dance </Italic>
          <p> Fallon & Byrne <br/> 17 Exchequer Street, Dublin </p>
        </Desc>
      </Event>
    </>
  );
}
