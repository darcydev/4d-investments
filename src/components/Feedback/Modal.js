import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'antd';

export default function Modal({ title = 'Default Title', visible = false }) {
  return (
    <Modal
      title="Basic Modal"
      visible={this.state.visible}
      onOk={this.handleOk}
      onCancel={this.handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}
