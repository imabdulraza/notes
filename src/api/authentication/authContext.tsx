import React from "react";

interface AuthContextType {
    user: any;
    role: string;
    signin: (user: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
};

let AuthContext = React.createContext<AuthContextType>(null!);

export default AuthContext;