import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Button as AntButton, Icon } from 'antd';

import { NAV_BAR_LINKS } from '../data/NavLinks';

import SimpleButton from '../components/UI/SimpleButton';

const { Header, Content } = Layout;

export default function AntHeader() {
  const [isOpen, toggleOpen] = useState(false);

  const ICON_MARKUP = isOpen ? 'down-circle' : 'up-circle';

  const ITEMS_MARKUP = NAV_BAR_LINKS.map((v, i) => (
    <Menu.Item key={`${i}:${v.title}`}>
      <SimpleButton
        key={`${i}:${v.title}`}
        type="link"
        text={v.title}
        href={v.link}
      />
    </Menu.Item>
  ));

  return (
    <Layout className="layout">
      <Header
        id="header"
        className="nk-header page-header is-transparent is-sticky is-dark"
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['0']}
          style={{ lineHeight: '64px' }}
        >
          {ITEMS_MARKUP}
        </Menu>
        <div className="banner banner-fs tc-light">
          <div className="nk-block nk-block-sm nk-block-header my-auto">
            <div className="container container-xxl pt-5">
              <div className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px">
                <div className="col-lg-6 order-lg-last">
                  <div
                    className="banner-gfx banner-gfx-auto animated"
                    data-animate="fadeInUp"
                    data-delay=".7"
                  >
                    <img src="images/azalea/gfx-e.png" alt="header" />
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 col-sm-10 text-center text-lg-left">
                  <div className="banner-caption">
                    <h1
                      className="title title-lg ttu animated"
                      data-animate="fadeInUp"
                      data-delay=".8"
                    >
                      To constitute Tribunals inferior to the other House
                    </h1>
                    <p
                      className="lead animated"
                      data-animate="fadeInUp"
                      data-delay=".9"
                    >
                      by which it shall not be diminished during their
                      Continuance in Office.
                    </p>
                    <ButtonContainer>
                      <SimpleButton
                        type="danger"
                        text="Enter Exchange"
                        href="https://google.com"
                        styles={{
                          color: 'white',
                          textTransform: 'uppercase'
                        }}
                      />
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>
    </Layout>
  );
}

const ButtonContainer = styled.div``;
