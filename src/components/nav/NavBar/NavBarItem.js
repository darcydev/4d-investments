import React from 'react';
import { Button, Radio, Icon } from 'antd';
import styled from 'styled-components';

import './NavBar.css';

export default function NavBarItem({ title, link }) {
  return (
    <Container className="navbar-link">
      <a href={link}>{title}</a>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;
  a {
    text-transform: capitalize;
    color: white;
    font-weight: 700;
    cursor: pointer;
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
  }
  &:hover {
    border-bottom: 2px solid white;
  }
`;
