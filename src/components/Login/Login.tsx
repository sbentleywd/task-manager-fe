import React, { useState, SyntheticEvent } from "react";
import { UserInterface } from "../auth/useUser";

const { loginUser } = require("../auth/utils");

const Login = (props: { setUser: (user: UserInterface) => void }) => {
	const [userEmail, setUserEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (event: SyntheticEvent) => {
		event.preventDefault();
		const user = await loginUser(userEmail, password);
		props.setUser(user);
		window.location.href = "/";
	};

	return (
		<div>
			<h1>Please login</h1>
			<form onSubmit={(event) => handleLogin(event)}>
				<label>
					Email:
					<input
						type="email"
						value={userEmail}
						onChange={(e) => setUserEmail(e.target.value)}
					/>
				</label>

				<label>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
			<a href="/signup">Create Account</a>
		</div>
	);
};

export default Login;
