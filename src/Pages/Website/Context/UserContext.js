import { createContext, useState } from "react";


// إنشاء Context
export const User = createContext({});

// مكون UserProvider لتوفير قيمة Context
export default function UserProvider({ children }) {
  const [auth, setAuth] = useState(); // تعيين قيمة ابتدائية لـ useState
  const value={auth, setAuth}
  return (
    <User.Provider value={value}>
      {children}
    </User.Provider>
  );
}
