import React from 'react';
import styled from 'styled-components';

export default function InnerSectionHeading({
  title = 'default title',
  subTitle = 'this is the default subtitle'
}) {
  return (
    <Container>
      <h2
        className="title title-md animated"
        data-animate="fadeInUp"
        data-delay="0.2"
      >
        {title}
      </h2>
      <p className="animated" data-animate="fadeInUp" data-delay="0.2">
        {subTitle}
      </p>
    </Container>
  );
}

const Container = styled.div``;
