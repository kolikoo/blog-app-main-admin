import React from "react";
import { Button, Form, Input } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router";
import { useGetBlogsById } from "../../../../../react-query/query/blogs";
import SkeletonLoading from "../../../../../components/skeleton-ui/skeleton";
import { useUpdateBlog } from "../../../../../react-query/mutation/blogs";
import { DASHBOARD_PATH } from "../../../../../routes/dashboard/index.enum";
import { useBlogQueryKeys } from "../../../../../react-query/query/blogs/useBlogsQueryKeys";
const { TextArea } = Input;
type FieldType = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
};

const BlogsUpdateView: React.FC = () => {
  const { LIST } = useBlogQueryKeys();
  const queryClient = useQueryClient();
  const [form] = useForm<FieldType>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blog, isLoading, isFetching } = useGetBlogsById(id as string);
  const { mutate: handleUpdateBlog } = useUpdateBlog(id as string, {
    onSuccess: () =>
      navigate(`/${DASHBOARD_PATH.DASHBOARD}/${DASHBOARD_PATH.BLOGS}`),
  });
  const onFinish = (values: FieldType) => {
    console.log(values);
    handleUpdateBlog(values);
    queryClient.invalidateQueries({ queryKey: [LIST] });
  };
  if (isLoading || isFetching) {
    return <SkeletonLoading number={4} />;
  }
  return (
    <Form
      form={form}
      name="basic"
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{
        title_ka: blog?.title_ka,
        title_en: blog?.title_en,
        description_ka: blog?.description_ka,
        description_en: blog?.description_en,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Title Geo"
        name="title_ka"
        rules={[{ required: true, message: "Please input title" }]}
      >
        <Input placeholder="Please input title geo" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Title Eng"
        name="title_en"
        rules={[{ required: true, message: "Please input title" }]}
      >
        <Input placeholder="Please input title eng" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Description Geo"
        name="description_ka"
        rules={[{ required: true, message: "Please input description" }]}
      >
        <TextArea placeholder="Please input description geo" rows={8} />
      </Form.Item>
      <Form.Item<FieldType>
        label="Description Eng"
        name="description_en"
        rules={[{ required: true, message: "Please input description" }]}
      >
        <TextArea placeholder="Please input description eng" rows={8} />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Update blog
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BlogsUpdateView;
