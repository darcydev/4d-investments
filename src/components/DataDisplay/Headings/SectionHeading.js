import React from 'react';
import styled from 'styled-components';

export default function SectionHeading({
  heading = 'default heading',
  backgroundHeading,
  subHeading
}) {
  return (
    <Container className="section-head section-head-s2">
      <h2
        className="title title-xl animated"
        data-animate="fadeInUp"
        data-delay="0.1"
        title={backgroundHeading ? backgroundHeading : heading}
      >
        {heading}
      </h2>
      <p className="animated" data-animate="fadeInUp" data-delay="0.2">
        {subHeading}
      </p>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
