import React from "react";

import AuthContext from "../api/authentication/authContext";

export function useAuth() {
    return React.useContext(AuthContext);
};