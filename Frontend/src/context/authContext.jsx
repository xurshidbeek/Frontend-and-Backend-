import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext({});

const ContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [authTokens, setAuthTokens] = useState(null);
	const navigate = useNavigate();

	const logout = () => {
		setUser(null);
		setAuthTokens(null);
		localStorage.removeItem(user);
		navigate("/login");
	};

	const login = async authTokens => {
		setUser(jwtDecode(authTokens.access));
		setAuthTokens(authTokens);
		localStorage.setItem("user", JSON.stringify(authTokens));
	};

	const value = {
		user,
		authTokens,
		setUser,
		setAuthTokens,
		login,
		logout,
	};

	return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default ContextProvider;
