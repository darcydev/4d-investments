import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import SimpleButton from '../components/UI/Buttons/SimpleButton';

export default function ButtonRow({ content = DEFAULT_BUTTONS }) {
  const MARKUP = content.map(v => v);

  return <Container>{MARKUP}</Container>;
}

// STYLES
const Container = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 0 5px;
  }

  ${media.lessThan('medium')`
    flex-direction: column;
    margin: auto;
    max-width: 50%;

    button {
      margin: 5px 0;
    }
  `}
`;

// CONTENT
const DEFAULT_BUTTONS = [
  <SimpleButton text="Num 1" type="danger" customStyleType="big" />,
  <SimpleButton text="Num 2" type="danger" customStyleType="big" />,
  <SimpleButton text="Num 3" type="danger" customStyleType="big" />,
  <SimpleButton text="Num 4" type="danger" customStyleType="big" />
];
