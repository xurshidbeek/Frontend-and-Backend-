import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";

export const Home = () => {
	const { user, logout } = useContext(authContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, []);

	return (
		<div>
			<h1>Home page</h1>
			<button onClick={logout}>Logout</button>
		</div>
	);
};
