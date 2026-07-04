export interface AuthUser {
  _id: string;
  userid: string;
  profileCompleted: boolean;
  name?: string;
  department?: string;
  cgpa?: number;
  skills: string[];
}

export interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}