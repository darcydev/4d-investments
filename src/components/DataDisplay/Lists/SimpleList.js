import React from 'react';
import styled from 'styled-components';
import { List, Icon } from 'antd';

export default function SimpleList({
  itemLayout = 'horizontal',
  styles = undefined,
  classes = undefined,
  // default content
  data = [
    {
      title: 'Default list title',
      icon: (
        <Icon
          type="check-circle"
          style={{ fontSize: '36px', color: '#f42f54' }}
        />
      ),
      content: 'Default list content 1'
    },
    {
      title: 'Default list title',
      icon: (
        <Icon
          type="check-circle"
          style={{ fontSize: '36px', color: '#f42f54' }}
        />
      ),
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
  .ant-list-split .ant-list-item {
    border-bottom: none;
  }

  .ant-list-item-meta-content {
    margin-left: 40px !important;
  }

  .ant-list-item-meta-description {
    letter-spacing: 0.15px;
    font-size: 16px;
    color: #97afd5;
  }
`;
