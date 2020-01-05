import React from 'react';
import styled from 'styled-components';
import { List, Icon } from 'antd';

export default function SolutionItem({
  icon = (
    <Icon type="check-circle" style={{ fontSize: '36px', color: '#f42f54' }} />
  ),
  content = 'this is the template item content'
}) {
  return (
    <div
      className="feature feature-inline animated"
      data-animate="fadeInUp"
      data-delay="0.4"
    >
      <div className="feature-icon feature-icon-md">{icon}</div>
      <div className="feature-text">
        <p>{content}</p>
      </div>
    </div>
  );
}
