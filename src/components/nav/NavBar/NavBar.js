import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Icon } from 'antd';

import { NAV_BAR_LINKS } from '../../../data/NavLinks';

import SimpleButton from '../../UI/Buttons/SimpleButton';
import InvestmentsLogo from '../../display/Logos/InvestmentsLogo';

const { SubMenu } = Menu;

export default function NavBar() {
  const ITEMS_MARKUP = NAV_BAR_LINKS.map((v, i) => {
    if (v.topNavBar) {
      return (
        <Menu.Item key={`${i}:${v.title}`}>
          <SimpleButton type="link" href="https://google.com" text={v.title} />
        </Menu.Item>
      );
    }
  });

  return (
    <Container>
      <LogoContainer>
        <InvestmentsLogo />
      </LogoContainer>
      <Menu
        mode="horizontal"
        style={{
          color: 'white',
          textAlign: 'right',
          position: 'absolute',
          bottom: 0,
          right: 0,
          background: 'inherit',
          maxWidth: '70%'
        }}
      >
        {ITEMS_MARKUP}
        {/*         <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              INCLUDE SUBMENU
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">
              <Link to="/rooms">Hotel Rooms</Link>
            </Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100px;
  position: relative;
  display: flex;
`;

const LogoContainer = styled.div`
  min-width: 30%;
  height: 100%;
  padding: 10px;
  margin: 30px 0 0 30px;
`;
