import styled from 'styled-components';
import theme from '../themes/default';
import Head from 'next/head';
import Link from 'next/link';
import FadeIn from 'react-fade-in';
import Layout from '../components/layout';
import Section from '../components/section';
import TheBigDay from '../sections/the-big-day';
import Rsvp from '../sections/rsvp';
import Accommodation from '../sections/accommodation';
import DayTwo from '../sections/day-two';
import Hero from '../sections/hero';

export default function (props) {
  return (
    <>
      <Head>
        <title>
          {props.siteName}
        </title>
        <meta
          name="description"
          content="The Big Day"
        />
      </Head>
      <Layout>
          <Hero/>
          <FadeIn delay="100">
          <Section id="the-big-day">
            <TheBigDay/>
          </Section>
          <Section id="day-two">
            <DayTwo/>
          </Section>
          <Section id="accommodation">
            <Accommodation/>
          </Section>
          <Section id="rsvp" fullWidth={true}>
            <Rsvp/>
          </Section>
        </FadeIn>
      </Layout>
    </>
  );
}
