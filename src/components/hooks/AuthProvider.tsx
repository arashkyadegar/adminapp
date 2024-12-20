import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type userType = {
  email: string;
  family_name: string;
  given_name: string;
  picture: string;
  name: string;
}
type LoginType = {
  email: string;
  password: string;
  roles: string[];
  remember_me?: boolean | undefined;
}

interface ProviderProps {
  user: string | null,
  token: string,
  roles: string[],
  login(data: LoginType): void,
  logout(): void,
}

const AuthContext = createContext<ProviderProps>({
  user: null,
  token: '',
  roles: [],
  login: () => { },
  logout: () => { }
})

export const randomAlphaNumeric = (length: number) => {
  let s = '';
  Array.from({ length }).some(() => {
    s += Math.random().toString(36).slice(2);
    return s.length >= length;
  });
  return s.slice(0, length);
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const storedInfo = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null
  const [user, setUser] = useState<string | null>(storedInfo?.email)
  const [token, setToken] = useState(storedInfo?.token || '')
  const [roles, setRoles] = useState(storedInfo?.roles || [])
  const navigate = useNavigate()

  const login = (data: LoginType) => {

    const t = randomAlphaNumeric(50)
    setTimeout(() => {
      const obj = { ...data, token: t }
      setUser(data.email)
      setToken(t)
      setRoles(data.roles)
      console.log(obj)
      localStorage.setItem('user', JSON.stringify(obj))
      navigate('/dashboard')
    }, 1000);
  }

  const logout = () => {
    setUser(null)
    setToken('')
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, token, roles, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}