import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

export default function PlatformListItem({
  icon = <Icon type="star" theme="twoTone" twoToneColor="#52c41a" />,
  content = 'this is default list item content'
}) {
  return (
    <div
      className="feature feature-inline feature-middle animated"
      data-animate="fadeInUp"
      data-delay="0.6"
    >
      <div className="feature-icon feature-icon-md">{icon}</div>
      <div className="feature-text">
        <p>
          Sign a smart-contract to allow our trader’s access for live trading
          corporis cryptocurrency susci pitlabo riosam, nisi ut.
        </p>
      </div>
    </div>
  );
}

/* {<em className="icon icon-md icon-grd ikon ikon-document-2" />} */
