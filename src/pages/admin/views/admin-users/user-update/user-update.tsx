import React from "react";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useGetUserById } from "../../../../../react-query/query/users";
import { useNavigate, useParams } from "react-router";
import { useUpdateUser } from "../../../../../react-query/mutation/user";
import { useQueryClient } from "@tanstack/react-query";
import SkeletonLoading from "../../../../../components/skeleton-ui/skeleton";
import { DASHBOARD_PATH } from "../../../../../routes/dashboard/index.enum";
import { useUsersQueryKeys } from "../../../../../react-query/query/users/useUsersQueryKeys";
type FieldType = {
  email: string;
  phone: string;
};

const UserUpdateView: React.FC = () => {
  const {LIST} = useUsersQueryKeys()
  const queryClient = useQueryClient();
  const [form] = useForm<FieldType>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user, isLoading, isFetching } = useGetUserById(id as string);
  const { mutate: handleUpdateUser } = useUpdateUser(id as string, {
    onSuccess: () =>
      navigate(`/${DASHBOARD_PATH.DASHBOARD}/${DASHBOARD_PATH.USERS}`),
  });
  const onFinish = (values: FieldType) => {
    handleUpdateUser(values);
    queryClient.invalidateQueries({ queryKey: [LIST] });
  };
  if (isLoading || isFetching) {
    return <SkeletonLoading number={2} />;
  }
  return (
    <Form
      name="basic"
      form={form}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ email: user?.email, phone: user?.phone }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input placeholder="Update Email" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please input your Phone!" }]}
      >
        <Input placeholder="Update Phone" />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Update user
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserUpdateView;
