import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../Dashboard/DashBoard";
import { UserInterface } from "../auth/useUser";

const Authenticated = (props: { setUser: (user: UserInterface) => void }) => {
	return (
		<Router>
			<Route
				exact
				path="/"
				render={(routeProps: any) => (
					<Dashboard {...routeProps} setUser={props.setUser} />
				)}
			/>
		</Router>
	);
};

export default Authenticated;
