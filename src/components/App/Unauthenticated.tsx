import React from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserInterface } from "../auth/useUser";
import UnauthenticatedNavBar from "../NavBar/UnauthenticatedNavBar";
import Landing from "../Landing/Landing";

const Unauthenticated = (props: { setUser: (user: UserInterface) => void }) => {
	return (
		<>
			<Router>
				<UnauthenticatedNavBar />
				<Route exact path="/" component={Landing} />
				<Route
					exact
					path="/login"
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
		</>
	);
};

export default Unauthenticated;
