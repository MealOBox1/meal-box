import { Form, Input, InputNumber, Button, Row } from "antd";
import React from "react";
import { connect } from "react-redux";
import { postAddress } from "../Actions/ItemsAction";

function Demo(props) {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not validate email!",
      number: "${label} is not a validate number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values) => {
    console.log(values);
    props.postAddress(values.user);
  };

  return (
    <div>
      <Row>
        <h3 style={{ marginLeft: "567px", marginTop: "35px" }}>
          Account Information
        </h3>
        {/* <Userinfo /> */}
      </Row>
      <Row>
        <Form
          style={{ width: "681px", marginLeft: "340px" }}
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "landmark"]}
            label="Landmark"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "pincode"]}
            label="Pincode"
            rules={[
              {
                type: "number",
                // min: 0,
                // max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          {/* <Form.Item name={["user", "website"]} label="Website">
            <Input /> 
          </Form.Item> */}
          <Form.Item name={["user", "introduction"]} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              style={{ backgroundColor: "#74cf4e", border: 0 }}
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
}

export default connect(null, { postAddress })(Demo);
