import { USERS_MUTATION_KEYS } from "./enum";

export const useUsersMutationKeys = () => {
  return {
    UPDATE: USERS_MUTATION_KEYS.UPDATE,
    CREATE: USERS_MUTATION_KEYS.CREATE,
  };
};
