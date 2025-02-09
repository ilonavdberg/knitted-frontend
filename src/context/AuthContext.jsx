import { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { isTokenValid } from "@/utils/Validator.js";


export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({
        status: "pending",
        isAuthenticated: false,
        user: null,
        shop: null,
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        const shopId = localStorage.getItem("shopId")

        if (token && isTokenValid(token)) {
            login(token, shopId || null);
        } else {
            logout();
        }
    }, [])

    function login(token, shopId = null) {
        localStorage.setItem("token", token)
        localStorage.setItem("shopId", shopId)

        const decodedToken = jwtDecode(token);

        setAuth({
            isAuthenticated: true,
            user: {
                id: decodedToken.sub,
                roles: decodedToken.roles,
            },
            shop: shopId ? { id: shopId } : null,
            status: "done",
        });
    }

    function logout() {
        localStorage.removeItem("token");
        setAuth({
            isAuthenticated: false,
            user: null,
            shop: null,
            status: "done",
        });
        navigate("/");
    }

    const contextData = {
        user: auth.user,
        isAuthenticated: auth.isAuthenticated,
        shop: auth.shop,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;