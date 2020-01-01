import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Button as AntButton } from 'antd';

export default function SimpleButton({
  shape = 'round',
  type = undefined,
  icon = undefined,
  customTextIcon = undefined,
  theme = undefined,
  size = 'large',
  text = undefined,
  href = undefined,
  styles = undefined,
  classes = undefined,
  customStyleType = undefined
}) {
  if (customStyleType === 'big') styles = customBigButtonStyle;

  return (
    <AntButton
      shape={shape}
      icon={icon}
      type={type}
      theme={theme}
      size={size}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={styles}
      className={classes}
    >
      {customTextIcon}
      {text}
    </AntButton>
  );
}

const customBigButtonStyle = {
  color: 'white',
  textTransform: 'uppercase',
  fontFamily: 'Quicksand',
  padding: '10px',
  letterSpacing: '0.8x',
  cursor: 'pointer',
  height: '100%'
};
