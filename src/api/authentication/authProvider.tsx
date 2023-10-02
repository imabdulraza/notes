import React from "react";

import { fakeAuthProvider } from "../../api/services";
import AuthContext from "./authContext";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    let [user, setUser] = React.useState<any>(null);
    let [role, setRole] = React.useState<any>(null);

    let signin = (newUser: string, callback: VoidFunction) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            setRole("ADMIN");
            //here you can set new user's role 
            localStorage.setItem("user", newUser);
            localStorage.setItem("role", "ADMIN");
            callback();
        });
    };

    let signout = (callback: VoidFunction) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            setRole(null);
            localStorage.removeItem("user");
            localStorage.removeItem("role");
            callback();
        });
    };

    let value = { user, role, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};