import React from 'react';
import styled from 'styled-components';
import { Collapse, Icon, Tabs } from 'antd';

const { TabPane } = Tabs;
const { Panel } = Collapse;

export default function AntFAQs({
  data = [
    {
      tab: 'General',
      questions: [
        { title: 'General Question 1', answer: 'General Answer 1' },
        { title: 'General Question 2', answer: 'General Answer 2' }
      ]
    },
    {
      tab: 'Other',
      questions: [
        { title: 'Other Question 1', answer: 'Other Answer 1' },
        { title: 'Other Question 2', answer: 'Other Answer 2' }
      ]
    }
  ]
}) {
  const MARKUP = data.map((v, i) => (
    <TabPane tab={v.tab} key={i + 1}>
      <Collapse
        bordered={false}
        accordion={true}
        defaultActiveKey={1}
        expandIcon={({ isActive }) => (
          <Icon type="caret-right" rotate={isActive ? 90 : 0} />
        )}
        style={customCollapseStyle}
      >
        {v.questions.map((v, i) => (
          <Panel header={v.title} key={i + 1} style={customPanelStyle}>
            <p>{v.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </TabPane>
  ));

  return (
    <Container>
      <Tabs size="large">{MARKUP}</Tabs>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  font-family: 'Quicksand';

  .ant-tabs-nav {
    font-size: 1.15rem;
    font-weight: 700;
    color: white;
  }

  .ant-collapse-item-active .ant-collapse-header {
    color: white !important;
  }

  .ant-collapse-header {
    color: #f42f54 !important;
    background: rgba(255, 255, 255, 0.05) !important;
    padding: 30px !important;
    font-weight: 700;
    font-size: 1.2rem;
  }

  .ant-collapse-content {
    padding: 10px 0 0 20px;
  }
`;

const customPanelStyle = {
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden'
};

const customCollapseStyle = {
  background: 'inherit'
};
