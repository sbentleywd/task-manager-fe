import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Component imports

import Dashboard from "../Welcome/DashBoard";
import Login from "../Welcome/Login";
import SignUp from "../Welcome/SignUp";
import useToken from "../auth/useToken";

function App() {
	const { token, setToken } = useToken();

	if (!token) {
		return <Login setToken={setToken} />;
	}

	return (
		<Router>
			<Route
				exact
				path="/"
				render={(props) => <Dashboard {...props} setToken={setToken} />}
			/>
			<Route exact path="/login" component={Login} />
			<Route exact path="/sign-up" component={SignUp} />
		</Router>
	);
}

export default App;
