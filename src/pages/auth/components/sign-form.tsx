import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router";
import { useLogin } from "../../../react-query/mutation/auth";
import { AUTH_PATHS } from "../../../routes/auth/index.enum";
import { DASHBOARD_PATH } from "../../../routes/dashboard/index.enum";
type FieldType = {
  email: string;
  password: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignForm: React.FC = () => {
  const navigate = useNavigate();
  const { mutate: handleLogin } = useLogin();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    handleLogin(values, {
      onSuccess: () => {
        navigate(`/${DASHBOARD_PATH.DASHBOARD}/${AUTH_PATHS.SIGNIN}`);
      },
    });
  };
  return (
    <div className="bg-white rounded-xl p-6">
      <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="flex flex-col"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignForm;
