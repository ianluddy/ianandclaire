import { useState } from 'react';
import theme from '../themes/default';
import styled, { keyframes } from 'styled-components';
import Quote from '../components/quote';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Card = styled.div`
  max-width: 560px;
  margin: 2rem auto 0;
  padding: 1.5rem 1.25rem;
  border: 1px solid #f0d5d9;
  border-radius: 8px;
  background: #fffafa;
  text-align: left;
  animation: ${fadeIn} 0.4s ease;
  @media (${theme.devices.md}) {
    padding: 2.5rem 2.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-family: ${theme.fontNav};
  letter-spacing: 1px;
  font-size: 1rem;
  color: ${theme.text};
`;

const Required = styled.span`
  color: ${theme.primary};
  margin-left: 2px;
`;

const inputStyles = `
  font-family: ${theme.fontBody};
  font-size: 1.1rem;
  padding: 0.65rem 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: ${theme.body};
  color: ${theme.text};
  transition: border-color ${theme.transitionTime}, box-shadow ${theme.transitionTime};
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: ${theme.primary};
    box-shadow: 0 0 0 3px rgba(234, 158, 169, 0.25);
  }
`;

const Input = styled.input`${inputStyles}`;
const Select = styled.select`${inputStyles}`;
const TextArea = styled.textarea`
  ${inputStyles}
  resize: vertical;
  min-height: 90px;
`;

const Choices = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Choice = styled.label`
  flex: 1 1 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border: 1px solid ${(p) => (p.$checked ? theme.primary : '#ddd')};
  background: ${(p) => (p.$checked ? 'rgba(234, 158, 169, 0.12)' : theme.body)};
  border-radius: 5px;
  cursor: pointer;
  font-family: ${theme.fontBody};
  font-size: 1.1rem;
  text-align: center;
  transition: all ${theme.transitionTime};
  &:hover {
    border-color: ${theme.primary};
  }
  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
`;

const Submit = styled.button`
  align-self: center;
  margin-top: 0.5rem;
  min-width: 180px;
  transition: background-color ${theme.transitionTime}, opacity ${theme.transitionTime};
  font-family: ${theme.fontButton};
  letter-spacing: 2px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: ${theme.primary};
  color: ${theme.body};
  font-size: 1rem;
  padding: 12px 22px;
  &:hover:not(:disabled) {
    background-color: ${theme.primaryLight};
  }
  &:disabled {
    opacity: ${theme.opacity};
    cursor: default;
  }
  @media (${theme.devices.md}) {
    font-size: 1.2rem;
    padding: 14px 26px;
  }
`;

const Thanks = styled.div`
  text-align: center;
  h3 {
    font-size: 2.4rem;
    margin: 0 0 0.5rem;
    color: ${theme.secondary};
  }
  p {
    font-size: 1.2rem;
    margin: 0 0 1.5rem;
  }
`;

const Reset = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${theme.fontNav};
  color: ${theme.textLight};
  text-decoration: underline;
  font-size: 1rem;
`;

const initialState = {
  name: '',
  email: '',
  attending: '',
  guests: '1',
  dietary: '',
  song: '',
  message: '',
};

export default function Rsvp() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | submitting | done

  const update = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Demo only: simulate a network request, nothing is sent anywhere.
    setTimeout(() => setStatus('done'), 900);
  };

  const reset = () => {
    setValues(initialState);
    setStatus('idle');
  };

  const attending = values.attending === 'yes';
  const firstName = values.name.trim().split(' ')[0];

  return (
    <>
      <h2>Rsvp</h2>
      <Quote padding={"0 0.75rem"}>We kindly request that you RSVP by December 16th</Quote>
      {status === 'done' ? (
        <Card>
          <Thanks>
            <h3>{attending ? 'See you there!' : "We'll miss you!"}</h3>
            <p>
              Thank you{firstName ? `, ${firstName}` : ''}.{' '}
              {attending
                ? "Your RSVP has been received and we can't wait to celebrate with you."
                : 'Your RSVP has been received. Thank you for letting us know.'}
            </p>
            <Reset type="button" onClick={reset}>Submit another response</Reset>
          </Thanks>
        </Card>
      ) : (
        <Card>
          <Form onSubmit={handleSubmit}>
            <Field>
              <Label htmlFor="rsvp-name">Full name<Required>*</Required></Label>
              <Input id="rsvp-name" name="name" value={values.name} onChange={update} required autoComplete="name" />
            </Field>
            <Field>
              <Label htmlFor="rsvp-email">Email<Required>*</Required></Label>
              <Input id="rsvp-email" name="email" type="email" value={values.email} onChange={update} required autoComplete="email" />
            </Field>
            <Field>
              <Label as="span">Will you be joining us?<Required>*</Required></Label>
              <Choices>
                <Choice $checked={values.attending === 'yes'}>
                  <input type="radio" name="attending" value="yes" checked={values.attending === 'yes'} onChange={update} required />
                  Joyfully accepts
                </Choice>
                <Choice $checked={values.attending === 'no'}>
                  <input type="radio" name="attending" value="no" checked={values.attending === 'no'} onChange={update} />
                  Regretfully declines
                </Choice>
              </Choices>
            </Field>
            {attending && (
              <>
                <Field>
                  <Label htmlFor="rsvp-guests">Number of guests</Label>
                  <Select id="rsvp-guests" name="guests" value={values.guests} onChange={update}>
                    {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
                  </Select>
                </Field>
                <Field>
                  <Label htmlFor="rsvp-dietary">Dietary requirements</Label>
                  <Input id="rsvp-dietary" name="dietary" value={values.dietary} onChange={update} placeholder="e.g. vegetarian, gluten free" />
                </Field>
                <Field>
                  <Label htmlFor="rsvp-song">Song request</Label>
                  <Input id="rsvp-song" name="song" value={values.song} onChange={update} placeholder="What will get you on the dance floor?" />
                </Field>
              </>
            )}
            <Field>
              <Label htmlFor="rsvp-message">A note for the couple</Label>
              <TextArea id="rsvp-message" name="message" value={values.message} onChange={update} />
            </Field>
            <Submit type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send RSVP'}
            </Submit>
          </Form>
        </Card>
      )}
    </>
  );
}
