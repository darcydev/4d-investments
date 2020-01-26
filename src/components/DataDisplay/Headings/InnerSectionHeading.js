import React from 'react';
import styled from 'styled-components';

export default function InnerSectionHeading({
  title = 'default title',
  subTitle = undefined,
  styles = undefined
}) {
  return (
    <Container style={styles}>
      <h2 className="title title-md">{title}</h2>
      {subTitle ? <p>{subTitle}</p> : null}
    </Container>
  );
}

const Container = styled.div``;
