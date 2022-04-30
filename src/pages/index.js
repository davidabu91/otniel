import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import About from '../sections/about';
import Business from '../sections/business';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import Services from 'sections/services';
import Education from '../sections/education';
import Security from '../sections/security';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Otniel" />
          <Banner/>
          <Services />
          <About />
          <Business />
          <Education />
          <Security />

          <TeamSection />

          <TestimonialCard />
        </Layout>
    </ThemeProvider>
  );
}
