import React, { useState, SyntheticEvent } from "react";
const { loginUser } = require("./utils");

const Login = (props: any) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (event: SyntheticEvent) => {
		event.preventDefault();
		const user = await loginUser(userName, password);
		props.setToken(user.token);
	};

	return (
		<div>
			<h1>Please login</h1>
			<form onSubmit={(event) => handleSubmit(event)}>
				<label>
					Email:
					<input
						type="email"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
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
		</div>
	);
};

export default Login;
