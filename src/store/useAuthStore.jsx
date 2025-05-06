import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useAuthStore = create(
  persist(
    immer((set) => ({
      user: null,
      token: null,

      setAuth: (user, token) =>
        set((state) => {
          state.user = user;
          state.token = token;
        }),
      clearAuth: () =>
        set((state) => {
          state.user = null;
          state.token = null;
        }),
      isAuthenticated: () => (state) => !!state.token,
    })),
  ),
  {
    name: "auth-storage",
    getStorage: () => localStorage,
  },
);

export default useAuthStore;
