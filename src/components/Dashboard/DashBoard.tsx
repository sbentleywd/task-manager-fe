import React from "react";
import Logoutbutton from "../auth/Logoutbutton";

const DashBoard = (props: { setUser: (user: {}) => void }) => {
	return (
		<div>
			<h1>My tasks</h1>
			<Logoutbutton setUser={props.setUser} />
		</div>
	);
};

export default DashBoard;
