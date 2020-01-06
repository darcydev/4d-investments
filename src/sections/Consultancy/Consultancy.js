import React from 'react';
import styled from 'styled-components';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import SimpleList from '../../components/DataDisplay/Lists/SimpleList';

export default function Consultancy() {
  return (
    <section>
      <SectionHeading
        heading="4D Consultancy"
        backgroundHeading="consultancy"
        subHeading="All Bills for raising Revenue shall originate in the House of Representatives may be made prior to the Duties of the"
      />
      <Content>
        <SimpleList />
        <p>
          Mit Ausnahme von Bedienungsrechten von Hypotheken abzuziehen ist, als
          die Summe sämtlicher Positionen, die insgesamt mehr als 10% des harten
          Kernkapital
        </p>
      </Content>
    </section>
  );
}

const Content = styled.div``;
