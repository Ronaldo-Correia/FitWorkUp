import { createContext, useState, useContext } from "react";

// cria o contexto
const UserContext = createContext(null);

// componente provider
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ name: username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// hook customizado separado
export function useUser() {
  return useContext(UserContext);
}
