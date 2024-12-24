/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { createBlog, updateBlog } from "../../../supabase/blogs";
import { Blog } from "../../../supabase/blogs/index.types";
import { useBlogsMutationKeys } from "./useBlogsMutationKeys";

export const useUpdateBlog = (
  id: string,
  options?: UseMutationOptions<null, Error, Partial<Blog>, unknown>
): UseMutationResult<null, Error, Partial<Blog>, unknown> => {
  const { UPDATE } = useBlogsMutationKeys();
  return useMutation<null, Error, Partial<Blog>, unknown>({
    mutationKey: [UPDATE],
    mutationFn: (payload: Partial<Blog>) => updateBlog(id, payload),
    ...options,
  });
};
export const useCreateBlog = (
  options?: UseMutationOptions<any, Error, any, unknown>
): UseMutationResult<void, Error, any, unknown> => {
  const { CREATE } = useBlogsMutationKeys();
  return useMutation<void, Error, any, unknown>({
    mutationKey: [CREATE],
    mutationFn: (variables: { payload: any; user: any }) =>
      createBlog(variables),
    ...options,
  });
};
