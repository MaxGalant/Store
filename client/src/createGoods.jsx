import React, { useState } from "react";
import { Form, Input, Button, Card, Layout } from "antd";
import { createGoods } from "./Redux/Api/goodsRequest";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const s = {
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  success: {
    textAlign: "center",
    fontSize: "25px",
    color: "green",
    fontWeight: "bold",
  },
  error: {
    textAlign: "center",
    fontSize: "25px",
    color: "red",
    fontWeight: "bold",
  },
  title: {
    marginBottom: "50px",
    textAlign: "center",
    color: "#1890ff",
  },
  formBlock: {
    marginTop: "40px",
    padding: "20px 30px",
    width: "480px",
    background: "white",
  },
  form: {
    margin: "0 auto",
  },
};
const CreateForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    createGoods(values);
  };

  return (
    <Layout style={s.content}>
      <Card title="Create Goods" style={s.formBlock}>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="imageUrl"
            label="Image Url"
            rules={[
              {
                required: true,
                message: "Please input your image url!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="productName"
            label="Goods Name"
            tooltip="What do you want call goods"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="count"
            label="Count"
            rules={[
              {
                required: true,
                message: "Please input your Count!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="weight"
            label="Weight"
            rules={[
              {
                required: true,
                message: "Please input  weight!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>{" "}
          <Form.Item
            name="width"
            label="width"
            rules={[
              {
                required: true,
                message: "Please input width !",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="height"
            label="height"
            rules={[
              {
                required: true,
                message: "Please input height!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
};
export default CreateForm;
