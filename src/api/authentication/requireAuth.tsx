import React from "react";

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type AuthProps = {
    permission: string[];
};

function RequireAuth({ permission }: AuthProps) {
    let auth = useAuth();
    let location = useLocation();
    let userHasRole = permission.includes(auth.role);

    if (!auth.user && !userHasRole) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/signin" state={{ from: location }} replace />;
    } else if (auth.user && !userHasRole) {
        return(<>4O3 Unauthorised</>);
    }

    return <Outlet />;
};

export default RequireAuth;