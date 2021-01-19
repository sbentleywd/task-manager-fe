import React, { SyntheticEvent, useState } from "react";
// import { Redirect } from "react-router-dom";

const { createUser } = require("../auth/utils");

const SignUp = (props: { setToken: (token: string) => void }) => {
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userAge, setAge] = useState(0);
	// const [redirect, setRedirect] = useState(false);

	const handleCreateUser = async (event: SyntheticEvent) => {
		event.preventDefault();
		const user = await createUser(userName, userEmail, password, userAge);
		props.setToken(user.token);

		window.location.href = "/";
	};

	return (
		<div className="signupForm">
			<h1>Please sign up</h1>
			<form onSubmit={(event) => handleCreateUser(event)}>
				<label>
					Name:
					<input
						type="text"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
				</label>
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
				<label>
					Age
					<input
						type="number"
						value={userAge}
						onChange={(e) => {
							setAge(parseInt(e.target.value));
						}}
					/>
				</label>

				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default SignUp;
