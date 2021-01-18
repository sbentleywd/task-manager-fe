import React, { useState, SyntheticEvent } from "react";

const Login = (props: any) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (event: SyntheticEvent) => {
		event.preventDefault();
		props.setToken("test-token");
		// try {
		// 	const response = await fetch("http://localost:3001/users/login");
		// 	if (response.ok) {
		// 		const jsonResponse = await response.json();
		// 		const token = jsonResponse.token;
		// 		props.setToken(token);
		// 	}
		// } catch (e) {
		// 	console.log(e);
		// }
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
