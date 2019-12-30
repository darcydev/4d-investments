import React from 'react';
import styled from 'styled-components';
import { Menu, Icon } from 'antd';

import { NAV_BAR_LINKS } from '../../../data/NavLinks';

import SimpleButton from '../../UI/SimpleButton';
import InvestmentsLogo from '../../display/Logos/InvestmentsLogo';

const { SubMenu } = Menu;

export default function AntNavBar() {
  const ITEMS_MARKUP = NAV_BAR_LINKS.map((v, i) => (
    <Menu.Item key={`${i}:${v.title}`}>
      <SimpleButton type="link" href="https://google.com" text={v.title} />
    </Menu.Item>
  ));

  return (
    <Container>
      <InvestmentsLogo />
      <Menu mode="horizontal">
        {ITEMS_MARKUP}
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              INCLUDE SUBMENU
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </Container>
  );
}

const Container = styled.div``;
