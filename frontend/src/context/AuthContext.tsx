import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { getCurrentUser, logout as logoutApi } from "../services/auth";
import type { AuthContextType, AuthUser } from "../types/auth";

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  async function refreshUser() {
    try {
      const response = await getCurrentUser();
      setUser(response.data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function login() {
    await refreshUser();
  }

  async function logout() {
    await logoutApi();
    setUser(null);
  }

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}