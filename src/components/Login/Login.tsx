import React from "react";
import Form from "../Form/Form";

const { loginUser } = require("../auth/utils");

const Login = (props: { setToken: (token: string) => void }) => {
	const handleLogin = async (userName: string, password: string) => {
		const user = await loginUser(userName, password);
		props.setToken(user.token);
	};

	return (
		<div>
			<h1>Please login</h1>
			<Form handleSubmit={handleLogin} />
			<a href="/signup">Create Account</a>
		</div>
	);
};

export default Login;
