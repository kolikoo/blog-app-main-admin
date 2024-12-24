/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { createUser, updateUser } from "../../../supabase/users";
import { useUsersMutationKeys } from "./useUsersMutationKeys";
import { UserResponse } from "@supabase/supabase-js";

export const useUpdateUser = (
  id: string,
  options?: UseMutationOptions<any, Error, any, unknown>
): UseMutationResult<UserResponse, Error, any, unknown> => {
  const { UPDATE } = useUsersMutationKeys();
  return useMutation<UserResponse, Error, any, unknown>({
    mutationKey: [UPDATE],
    mutationFn: (payload: { email: string; phone: string }) =>
      updateUser(id, payload),
    ...options,
  });
};
export const useCreateUser = (
  options?: UseMutationOptions<any, Error, any, unknown>
): UseMutationResult<UserResponse, Error, any, unknown> => {
  const { CREATE } = useUsersMutationKeys();
  return useMutation<UserResponse, Error, any, unknown>({
    mutationKey: [CREATE],
    mutationFn: createUser,
    ...options,
  });
};
