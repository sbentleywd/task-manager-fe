import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		title: {
			margin: "0.3em",
			flexGrow: 1,
		},
	})
);

const UnauthenticatedNavBar = () => {
	const classes = useStyles();
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h4" className={classes.title}>
					Task-Manager
				</Typography>
				<Button color="inherit" component={Link} to={"/login"}>
					Login
				</Button>
				<Button color="inherit" component={Link} to={"/signup"}>
					Sign Up
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default UnauthenticatedNavBar;
