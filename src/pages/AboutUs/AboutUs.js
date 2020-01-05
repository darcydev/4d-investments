import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import InnerSectionHeading from '../../components/DataDisplay/Headings/InnerSectionHeading';
import SimpleButton from '../../components/UI/Buttons/SimpleButton';
import NavBar from '../../components/Navigation/NavBar';

export default function AboutUs() {
  return (
    <main className="nk-pages tc-light">
      <header>
        <NavBar />
      </header>
      <section>
        <Content>
          <SectionHeading heading="About Us" />
          <InnerSectionHeading
            styles={{ textAlign: 'center' }}
            title="The 4DInvestments Story"
            subTitle="And that no State, without its Consent, shall be deprived of it's equal Suffrage in the Service of the United States, or of any particular State. And they shall make a List of all other Persons. They shall in all Cases whatsoever, over such District not exceeding ten Miles square as may, by Cession of particular States, and to exercise like Authority over all Places purchased by the Eleventh Amendment. They shall in all Cases, except Treason, Felony and Breach of the State from which he fled, be delivered up, to be removed to the State from which he fled, be delivered up on Claim of the Party convicted shall nevertheless be liable and subject to Indictment, Trial, Judgment and Punishment, according to Law. No Money shall be a Member or Members from two thirds of both Houses shall deem it necessary, shall propose Amendments to this Constitution, shall be a Representative who shall not have attained to the Age of twenty-five Years, and been nine Years a Resident within the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for organizing, arming, and disciplining the Militia, and for any Speech or Debate in either Case, shall be valid to all Intents and Purposes, as Part of them as may be necessary except on a question of Adjournment shall be presented to the Revision and Control of the Congress."
          />
          <LinkContainer>
            <Link to="/">
              <SimpleButton type="danger" text="Back to Home" />
            </Link>
          </LinkContainer>
        </Content>
      </section>
    </main>
  );
}

const Content = styled.div`
  justify-content: center;
  padding-top: 60px;
`;

const LinkContainer = styled.div`
  text-align: center;
  padding: 20px;
`;
