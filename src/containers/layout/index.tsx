import React from "react";

import { Container } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

import Header from "./header";
import { useAuth } from "../../hooks/useAuth";




function Layout() {
    let auth = useAuth();
    
    return (
        <>
            <Header />
            

            {/* <div>
                <AuthStatus />

                <ul>
                    <li>
                        <Link to="/">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul> */}

                <Outlet />
            {/* </div> */}

        </>
    );
}

export default Layout;