import { AUTH_MUTATION_KEYS } from "./enum"

export const useAuthMutationKeys = () => {
    return{
        LOGIN: AUTH_MUTATION_KEYS.LOGIN,
        LOGOUT: AUTH_MUTATION_KEYS.LOGOUT
    }
}