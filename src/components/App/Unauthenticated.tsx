import React from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Unauthenticated = (props: { setToken: (token: string) => void }) => {
	return (
		<Router>
			<Route
				exact
				path="/"
				render={(routeProps) => (
					<Login {...routeProps} setToken={props.setToken} />
				)}
			/>
			<Route
				path="/signup"
				render={(routeProps) => (
					<SignUp {...routeProps} setToken={props.setToken} />
				)}
			/>
		</Router>
	);
};

export default Unauthenticated;
