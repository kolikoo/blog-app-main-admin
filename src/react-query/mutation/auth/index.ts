import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { login, logout } from "../../../supabase/auth";
import { useAuthMutationKeys } from "./useAuthMutationKeys";
import { AuthError, PostgrestError } from "@supabase/supabase-js";
import { LoginResponse, RegisterProps } from "./index.types";

export const useLogin = (): UseMutationResult<
  LoginResponse,
  PostgrestError,
  RegisterProps
> => {
  const { LOGIN } = useAuthMutationKeys();
  return useMutation<LoginResponse, PostgrestError, RegisterProps>({
    mutationKey: [LOGIN],
    mutationFn: login,
  });
};
export const useLogOut = (): UseMutationResult<
  { error: AuthError | null },
  PostgrestError,
  void
> => {
  const { LOGOUT } = useAuthMutationKeys();
  return useMutation<{ error: AuthError | null }, PostgrestError, void>({
    mutationKey: [LOGOUT],
    mutationFn: logout,
  });
};
