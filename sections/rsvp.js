import theme from '../themes/default';
import styled from 'styled-components';
import Quote from '../components/quote';

const IframeWrapper = styled.div`
  iframe {
    width: 100%;
    height: 850px;
    @media (${theme.devices.md}) {
      height: 800px;
    }
  }
`;

export default function ({ children, hide, padding }) {
  return (
    <>
      <h2>Rsvp</h2>
      <Quote padding={"0 0.75rem"}>We kindly request that you RSVP by December 16th</Quote>
      <IframeWrapper>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSftDXNh4spdexg6NNx7mEVMUIkkQmTkURjkvtbL7dNBvoCd7w/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      </IframeWrapper>
    </>
  );
}
