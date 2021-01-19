import React from "react";
import { UserInterface } from "../auth/useUser";

const Logoutbutton = (props: { setUser: (user: UserInterface) => void }) => {
	return (
		<button
			onClick={() =>
				props.setUser({
					token: "",
				})
			}
		>
			Logout
		</button>
	);
};

export default Logoutbutton;
