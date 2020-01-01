import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

export default function SimpleCard({
  title = 'Default card title',
  content = 'Default card content goes right here!'
}) {
  return (
    <Card title={title} style={{ width: '200px' }}>
      <p>{content}</p>
    </Card>
  );
}
