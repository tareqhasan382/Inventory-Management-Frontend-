import React, { createContext, ReactNode } from "react";
// import { Auth, getAuth } from "firebase/auth";
// import app from "../firebase/firebase.config";

interface AuthContextProps {
  user: string;
  //   role: string;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
// export const auth: Auth = getAuth(app);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const user = "";

  const authInfo: AuthContextProps = {
    user: user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

// import { createContext } from "react";

// const AuthConcext = createContext(null);

// const AuthProviders = ({children}) => {
//     const authInfo = {}
//   return (
//     <AuthConcext.Provider>
//       {children}
//     </AuthConcext.Provider>
//   );
// }

// export default AuthProviders;
