import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { List, Icon } from 'antd';

export default function SimpleList({
  itemLayout = 'horizontal',
  styles = undefined,
  classes = undefined,
  light = false,
  // default content
  data = [
    {
      icon: <Icon type="check-circle" />,
      content: 'Default list content 1'
    },
    {
      icon: <Icon type="check-circle" />,
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
              style={{ color: light ? 'wheat' : '#0b0b1d' }}
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

    i {
      font-size: 36px;
      color: rgb(244, 47, 84);
    }
  }

  .ant-list-item-meta-content {
    margin-left: 40px;
  }

  .ant-list-item-meta-description {
    letter-spacing: 0.15px;
    font-size: 16px;
    color: inherit;
  }

  ${media.lessThan('large')`
    .ant-list-item-meta-content {
      margin-left: 20px;
    }
  `}

  ${media.lessThan('medium')`
    .ant-list-item-meta-content {
      margin-left: 10px;
    }
  `}
`;
