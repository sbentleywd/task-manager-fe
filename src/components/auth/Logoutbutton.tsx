import React from "react";
import Button from "@material-ui/core/Button";

import { UserInterface } from "../auth/useUser";

const Logoutbutton = (props: { setUser: (user: UserInterface) => void }) => {
	const handleLogout = () => {
		props.setUser({
			token: "",
		});
		window.location.href = "/";
	};

	return (
		<Button color="inherit" onClick={handleLogout}>
			Logout
		</Button>
	);
};

export default Logoutbutton;
