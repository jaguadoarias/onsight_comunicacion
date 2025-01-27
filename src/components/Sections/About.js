import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: #fff;
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <SectionContainer>
        <h2>About Us</h2>
        {/* About content will go here */}
      </SectionContainer>
    </AboutSection>
  );
};

export default About;
