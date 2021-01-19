import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../Dashboard/DashBoard";

const Authenticated = (props: { setToken: (token: string) => void }) => {
	return (
		<Router>
			<Route
				exact
				path="/"
				render={(routeProps: any) => (
					<Dashboard {...routeProps} setToken={props.setToken} />
				)}
			/>
		</Router>
	);
};

export default Authenticated;
