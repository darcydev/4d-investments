import React from 'react';
import styled from 'styled-components';

export default function InnerSectionHeading({
  title = 'default title',
  subTitle = 'this is the default subtitle',
  styles = undefined
}) {
  return (
    <Container style={styles}>
      <h2 className="title title-md">{title}</h2>
      <p>{subTitle}</p>
    </Container>
  );
}

const Container = styled.div``;
