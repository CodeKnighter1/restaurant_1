import { AuthType } from '../../types';
import { create } from 'zustand';

type AuthStore = {
  authState: AuthType;
  setAuth: (state: AuthType) => void;
};

export const useAuth = create<AuthStore>((set) => ({
  authState: 'login' as AuthType, // Boshlang'ich holat har doim 'login'
  setAuth: (state) => set(() => ({ authState: state })),
}));