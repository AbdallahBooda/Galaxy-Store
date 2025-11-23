import { create } from "zustand";

export const AuthStore = create((set) => ({
  isLoggedIn: false,
  userEmail: null,

  login: (email) => set({ isLoggedIn: true, userEmail: email }),

  logout: () => set({ isLoggedIn: false, userEmail: null }),
}));
