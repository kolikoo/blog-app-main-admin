import { BLOGS_MUTATION_KEYS } from "./enum";

export const useBlogsMutationKeys = () => {
  return {
    UPDATE: BLOGS_MUTATION_KEYS.UPDATE,
    CREATE: BLOGS_MUTATION_KEYS.CREATE,
  };
};
