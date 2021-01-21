import React, { SyntheticEvent, useState } from "react";
import { UserInterface } from "../auth/useUser";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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

const { createUser } = require("../auth/utils");

const SignUp = (props: { setUser: (user: UserInterface) => void }) => {
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userAge, setAge] = useState<Number>();
	const classes = useStyles();

	const handleCreateUser = async (event: SyntheticEvent) => {
		event.preventDefault();
		const user = await createUser(userName, userEmail, password, userAge);
		props.setUser(user);
		window.location.href = "/";
	};

	return (
		<form className={classes.formContainer}>
			<h1>Please sign up</h1>

			<TextField
				className={classes.textField}
				id="outlined-basic"
				variant="outlined"
				type="text"
				label="Name"
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
			/>

			<TextField
				required
				className={classes.textField}
				id="outlined-required"
				variant="outlined"
				label="Email"
				type="email"
				value={userEmail}
				onChange={(e) => setUserEmail(e.target.value)}
			/>

			<TextField
				required
				className={classes.textField}
				id="outlined-password-input"
				variant="outlined"
				label="Password"
				type="password"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>

			<TextField
				className={classes.textField}
				id="outlined-number"
				variant="outlined"
				label="Age"
				type="number"
				value={userAge}
				onChange={(e) => {
					setAge(parseInt(e.target.value));
				}}
			/>

			<Button
				onClick={handleCreateUser}
				variant="contained"
				color="primary"
				className={classes.submit}
			>
				Sign Up
			</Button>
		</form>
	);
};

export default SignUp;
