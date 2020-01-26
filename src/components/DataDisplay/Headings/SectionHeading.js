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
        className="title title-xl"
        title={backgroundHeading ? backgroundHeading : heading}
      >
        {heading}
      </h2>
      <p>{subHeading}</p>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;

  h2,
  p {
    color: #202b47;
  }
`;
