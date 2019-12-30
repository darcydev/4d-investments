import React from 'react';
import { List, Avatar, Icon } from 'antd';

const data = [
  {
    title: 'Ant Design Title 1',
    icon: <Icon type="star" theme="twoTone" twoToneColor="#52c41a" />,
    content:
      'Sunt cupidatat proident magna et ipsum commodo exercitation ullamco.'
  },
  {
    title: 'Ant Design Title 2',
    icon: <Icon type="star" theme="twoTone" twoToneColor="#52c41a" />,
    content:
      'Sunt cupidatat proident magna et ipsum commodo exercitation ullamco.'
  },
  {
    title: 'Ant Design Title 3',
    icon: <Icon type="star" theme="twoTone" twoToneColor="#52c41a" />,
    content:
      'Sunt cupidatat proident magna et ipsum commodo exercitation ullamco.'
  },
  {
    title: 'Ant Design Title 4',
    icon: <Icon type="star" theme="twoTone" twoToneColor="#52c41a" />,
    content:
      'Sunt cupidatat proident magna et ipsum commodo exercitation ullamco.'
  }
];

export default function IconList() {
  return (
    <List
      style={{ color: 'white' }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          {item.icon}
          <List.Item.Meta title={item.title} description={item.content} />
        </List.Item>
      )}
    />
  );
}
