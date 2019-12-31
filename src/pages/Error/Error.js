import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SectionHeading from '../../components/display/Headings/SectionHeading';

export default function Error() {
  return (
    <Container>
      <SectionHeading heading="page not found" />
      <Link to="/" className="btn-primary">
        go back
      </Link>
    </Container>
  );
}

const Container = styled.div``;
