import React from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserInterface } from "../auth/useUser";

const Unauthenticated = (props: { setUser: (user: UserInterface) => void }) => {
	return (
		<Router>
			<Route
				exact
				path="/"
				render={(routeProps) => (
					<Login {...routeProps} setUser={props.setUser} />
				)}
			/>
			<Route
				path="/signup"
				render={(routeProps) => (
					<SignUp {...routeProps} setUser={props.setUser} />
				)}
			/>
		</Router>
	);
};

export default Unauthenticated;
