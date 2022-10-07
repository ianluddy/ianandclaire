import styled from 'styled-components';
import theme from '../themes/default';

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';
import Title from '../components/title';
import Subtitle from '../components/subtitle';
import Image from '../components/image';
import Section from '../components/section';
import Menu from '../components/menu';

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
        <Title/>
        <Subtitle>Friday Feb 3, 2023 • City Hall, Dublin</Subtitle>
        <Menu/>
        <Section>
          <Hero/>
        </Section>
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
      </Layout>
    </>
  );
}
