import React from 'react';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';

import AntFAQs from '../../components/FAQs/FAQs';

const data = [
  {
    tab: 'General',
    questions: [
      { title: 'General Question 1', answer: 'General Answer 1' },
      { title: 'General Question 2', answer: 'General Answer 2' }
    ]
  },
  {
    tab: 'ICO',
    questions: [
      { title: 'ICO Question 1', answer: 'ICO Answer 1' },
      { title: 'ICO Question 2', answer: 'ICO Answer 2' }
    ]
  },
  {
    tab: 'Investors',
    questions: [
      { title: 'ICO Question 1', answer: 'ICO Answer 1' },
      { title: 'ICO Question 2', answer: 'ICO Answer 2' }
    ]
  },
  {
    tab: 'Token',
    questions: [
      { title: 'ICO Question 1', answer: 'ICO Answer 1' },
      { title: 'ICO Question 2', answer: 'ICO Answer 2' }
    ]
  },
  {
    tab: 'Legal',
    questions: [
      { title: 'Legal Question 1', answer: 'Legal Answer 1' },
      { title: 'Legal Question 2', answer: 'Legal Answer 2' }
    ]
  }
];

export default function FAQs() {
  return (
    <section className="section" id="faqs">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <SectionHeading
              heading="FAQs"
              subHeading="If you have any other questions, please get in touch!"
            />
          </div>
        </div>
        <div className="nk-block">
          <div className="row justify-content-center">
            <AntFAQs data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
