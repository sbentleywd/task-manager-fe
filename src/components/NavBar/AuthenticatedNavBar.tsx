import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "../styles/useStyles";
import Logoutbutton from "../auth/Logoutbutton";
import { UserInterface } from "../auth/useUser";

const AuthenticatedNavBar = (props: {
	setUser: (user: UserInterface) => void;
}) => {
	const classes = useStyles();
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h4" className={classes.title}>
					Task-Manager
				</Typography>
				<Logoutbutton setUser={props.setUser} />
			</Toolbar>
		</AppBar>
	);
};

export default AuthenticatedNavBar;
