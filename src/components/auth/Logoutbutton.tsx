import React from "react";
import Button from "@material-ui/core/Button";
import useUser from "../auth/useUser";
import { UserInterface } from "../auth/useUser";

const Logoutbutton = (props: { setUser: (user: UserInterface) => void }) => {
	const { setUser } = useUser();
	return (
		<Button
			variant="contained"
			color="primary"
			onClick={() =>
				props.setUser({
					token: "",
				})
			}
		>
			Logout
		</Button>
	);
};

export default Logoutbutton;
