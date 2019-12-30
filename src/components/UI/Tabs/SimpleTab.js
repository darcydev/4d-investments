import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function SimpleTab({
  tabHeadings = ['heading1', 'heading2'],
  tabContent
}) {
  const TAB_HEADING_MARKUP = tabHeadings.map((v, i) => (
    <li>
      <a className="active" data-toggle="tab" href="#tab-1-1">
        {v}
      </a>
    </li>
  ));

  const TAB_CONTENT_MARKUP = 11;

  return (
    <Tabs
      defaultActiveKey="1"
      onChange={callback}
      className="nav tab-nav tab-nav-btn-bdr-s2 justify-content-center justify-content-sm-between pb-4 pb-sm-5"
    >
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
}

{
  /* <ul
className="nav tab-nav tab-nav-btn-bdr-s2 justify-content-center justify-content-sm-between pb-4 pb-sm-5 animated"
data-animate="fadeInUp"
data-delay="0.2"
>
<li>
  <a className="active" data-toggle="tab" href="#tab-1-1">
    FOR Participators
  </a>
</li>
<li className="tab-nav-sap d-none d-sm-block" />
<li>
  <a data-toggle="tab" href="#tab-1-2">
    For Traders
  </a>
</li>
</ul>
 */
}
