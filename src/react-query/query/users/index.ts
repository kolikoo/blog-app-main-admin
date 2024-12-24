import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getSingleUser, getUsers } from "../../../supabase/users";
import { useUsersQueryKeys } from "./useUsersQueryKeys";
import { User } from "../../../supabase/users/index.types";

export const useGetUsers = (): UseQueryResult<User[], Error> => {
  const { LIST } = useUsersQueryKeys();
  return useQuery<User[], Error>({
    queryKey: [LIST],
    queryFn: getUsers,
  });
};
export const useGetUserById = (
  id: string
): UseQueryResult<User | null, Error> => {
  const { ONEUSER } = useUsersQueryKeys();
  return useQuery<User | null, Error>({
    queryKey: [ONEUSER],
    queryFn: () => getSingleUser(id),
  });
};
