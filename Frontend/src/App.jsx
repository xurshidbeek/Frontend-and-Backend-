import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

function App() {

	return (
		<Routes>
			<Route element={<Home />} path="/" />
			<Route element={<Login />} path="/login" />
		</Routes>
	);
}

export default App;
