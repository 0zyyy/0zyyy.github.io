import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
      <LeftSection main center>
      <SectionTitle>
        Personal Portofolio
      </SectionTitle>
      <SectionText>
        Saya adalah seorang Web Developer dan Android Developer. Teknologi yang sering saya gunakan adalah ReactJS.
      </SectionText>
      <Button>
        Explore More
      </Button>
      </LeftSection>
    </Section>
);

export default Hero;