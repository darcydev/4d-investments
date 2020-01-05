import React, { Component } from 'react';
import { Form, Input } from 'antd';

import './Form.css';

import SimpleButton from '../../UI/Buttons/SimpleButton';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default class ContactForm extends Component {
  componentDidMount() {
    // To disable submit button at the beginning.
    // this.props.form.validateFields();
  }

  onFormSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) console.log('Received values of form: ', values);
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    const usernameError =
      isFieldTouched('username') && getFieldError('username');

    return (
      <Form>
        <Form.Item
          label="your name"
          validateStatus={usernameError ? 'error' : ''}
          help={usernameError || ''}
        >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Enter your name' }]
          })(<Input placeholder="Introduce yourself" />)}
        </Form.Item>
        <Form.Item label="e-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'Enter a valid e-mail'
              },
              {
                required: true,
                message: 'Enter your e-mail'
              }
            ]
          })(<Input placeholder="Who do we reply to" />)}
        </Form.Item>
        <Form.Item label="your message">
          {getFieldDecorator('text', {
            rules: [
              {
                required: true,
                message: 'Enter your question or comment'
              }
            ]
          })(<Input placeholder="Leave your question or comment" />)}
        </Form.Item>
        <Form.Item>
          <SimpleButton disabled={hasErrors(getFieldsError())} text="Send" />
        </Form.Item>
      </Form>
    );
  }
}
