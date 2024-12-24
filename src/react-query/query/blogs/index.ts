import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getBlogById, getBlogs } from "../../../supabase/blogs";
import { useBlogQueryKeys } from "./useBlogsQueryKeys";
import { Blog } from "../../../supabase/blogs/index.types";

export const useGetBlogs = (): UseQueryResult<Blog[], Error> => {
  const { LIST } = useBlogQueryKeys();
  return useQuery<Blog[], Error>({
    queryKey: [LIST],
    queryFn: getBlogs,
  });
};
export const useGetBlogsById = (id: string): UseQueryResult<Blog, Error> => {
  const { ONEBLOG } = useBlogQueryKeys();
  return useQuery<Blog, Error>({
    queryKey: [ONEBLOG],
    queryFn: () => getBlogById(id),
  });
};
