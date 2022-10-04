import theme from '../themes/default';
import styled from 'styled-components';

const IframeWrapper = styled.div`
  iframe {
    width: 100%;
    height: 900px;
    @media (${theme.devices.md}) {
      height: 800px;
    }
  }
`;

export default function ({ children, hide, padding }) {
  return (
    <>
      <h2>RSVP</h2>
      <IframeWrapper>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSftDXNh4spdexg6NNx7mEVMUIkkQmTkURjkvtbL7dNBvoCd7w/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </IframeWrapper>
    </>
  );
}
