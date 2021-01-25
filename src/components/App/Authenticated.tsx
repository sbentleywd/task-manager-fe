import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../Dashboard/DashBoard";
import { UserInterface } from "../auth/useUser";
import AuthenticatedNavBar from "../NavBar/AuthenticatedNavBar";
import Container from "@material-ui/core/Container";
import EditTask from "../EditTask/EditTask";

const Authenticated = (props: { setUser: (user: UserInterface) => void }) => {
	return (
		<>
			<AuthenticatedNavBar setUser={props.setUser} />
			<Container maxWidth="md">
				<Router>
					<Route
						exact
						path="/"
						render={(routeProps: any) => (
							<Dashboard
								{...routeProps}
								setUser={props.setUser}
							/>
						)}
					/>
					<Route path="/tasks/edit/:id" component={EditTask} />
				</Router>
			</Container>
		</>
	);
};

export default Authenticated;
