import React from "react";

const Welcome = () => {
	return (
		<div>
			<h1>Welcome to task-manager</h1>
			<p>
				Please <a href="/login">login</a> or{" "}
				<a href="/sign_up">sign up</a>
			</p>
		</div>
	);
};

export default Welcome;
