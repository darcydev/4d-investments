import React from 'react';
import styled from 'styled-components';
import { List, Icon } from 'antd';

import './List.css';

export default function SimpleList({
  itemLayout = 'horizontal',
  styles = undefined,
  classes = undefined,
  // default content
  data = [
    {
      title: 'Default list title',
      icon: <Icon type="star" theme="twoTone" twoToneColor="#52c41a" />,
      content: 'Default list content 1'
    },
    {
      title: 'Default list title',
      icon: <Icon type="star" theme="twoTone" twoToneColor="#52c41a" />,
      content: 'Default list content 2'
    }
  ]
}) {
  return (
    <Container>
      <List
        className={classes}
        style={styles}
        itemLayout={itemLayout}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            {item.icon}
            <List.Item.Meta
              className="feature-text"
              title={item.title}
              description={item.content}
            />
          </List.Item>
        )}
      />
    </Container>
  );
}

const Container = styled.div`
  .ant-list.split .ant-list-item {
    border-bottom: none;
  }

  .ant-list.item i {
    min-width: 15% !important;
    text-align: left !important;
  }

  .ant-item-list-meta {
    padding-left: 40px;
  }

  .ant-list-item-meta-description {
    letter-spacing: 0.15px;
    font-size: 16px;
    color: #97afd5;
  }
`;
