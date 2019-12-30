import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Button as AntButton, Icon } from 'antd';

import { NAV_BAR_LINKS } from '../../../data/NavLinks';

import './NavBar.css';

import NavBarItem from './NavBarItem';

import SimpleButton from '../../UI/SimpleButton';

// import FourDMarketsLogo from '../Logo/4DMarketsLogo';

const { Header, Content } = Layout;
const { SubMenu } = Menu;

export default function NavBar() {
  const [isOpen, toggleOpen] = useState(false);

  const ICON_MARKUP = isOpen ? 'down-circle' : 'up-circle';

  const ITEMS_MARKUP = NAV_BAR_LINKS.map((v, i) => (
    <Menu.Item key={`${i}:${v.title}`}>
      <a href={v.link} target="_blank" rel="noopener noreferrer">
        {v.title}
      </a>
    </Menu.Item>
  ));

  return (
    <Container className="Navbar">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        style={{ lineHeight: '64px' }}
      >
        {/* TODO insert logo */}
        <ButtonContainer className="toggle" onClick={() => toggleOpen(!isOpen)}>
          <Icon type={ICON_MARKUP} theme="twoTone" />
        </ButtonContainer>
        {ITEMS_MARKUP}
      </Menu>
    </Container>
  );
}

const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  min-height: 70px;
  .logo-and-button {
    display: flex;
    align-items: center;
  }
`;

const LinksContainer = styled.ul`
  display: flex;
`;

const LogoContainer = styled.div``;
const ButtonContainer = styled.div``;
