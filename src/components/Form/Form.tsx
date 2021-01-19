import React, { useState, SyntheticEvent } from "react";

const Form = (props: {
	handleSubmit: (userName: string, password: string) => void;
}) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
		props.handleSubmit(userName, password);
	};

	return (
		<form onSubmit={handleSubmit}>
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
	);
};

export default Form;
