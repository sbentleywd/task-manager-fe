import React from "react";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Unauthenticated = (props: { setToken: (token: string) => void }) => {
	return (
		<Router>
			<Route exact path="/" component={Login} />
			<Route path="/signup" component={SignUp} />
		</Router>
	);
};

export default Unauthenticated;
