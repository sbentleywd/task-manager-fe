import React, { useState, SyntheticEvent } from "react";
import { UserInterface } from "../auth/useUser";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";


const { loginUser } = require("../auth/utils");

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formContainer: {
			display: "flex",
			flexWrap: "wrap",
			alignItems: "center",
			flexDirection: "column",
		},
		textField: {
			margin: theme.spacing(1),
			width: "30ch",
		},
		submit: {
			margin: theme.spacing(1),
		},
	})
);

const Login = (props: { setUser: (user: UserInterface) => void }) => {
	const [userEmail, setUserEmail] = useState("");
	const [password, setPassword] = useState("");
	const classes = useStyles();

	const handleLogin = async (event: SyntheticEvent) => {
		event.preventDefault();
		const user = await loginUser(userEmail, password);
		props.setUser(user);
		if (user.token) window.location.href = "/";
	};

	return (
		<>
			<form className={classes.formContainer}>
				<h1>Please login</h1>
				<TextField
					className={classes.textField}
					required
					id="outlined-required"
					label="Email"
					variant="outlined"
					onChange={(e) => setUserEmail(e.target.value)}
					value={userEmail}
				/>

				<TextField
					id="outlined-password-input"
					required
					className={classes.textField}
					label="Password"
					type="password"
					variant="outlined"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>

				<Button
					onClick={handleLogin}
					variant="contained"
					color="primary"
					className={classes.submit}
				>
					Login
				</Button>
				<Button color="inherit" component={Link} to={"/signup"}>
					Sign Up
				</Button>
			</form>
		</>
	);
};

export default Login;
