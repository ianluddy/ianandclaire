import theme from '../themes/default';
import styled from 'styled-components';

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
      <IframeWrapper>
        <iframe loading="lazy" src="https://docs.google.com/forms/d/e/1FAIpQLSftDXNh4spdexg6NNx7mEVMUIkkQmTkURjkvtbL7dNBvoCd7w/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      </IframeWrapper>
    </>
  );
}
