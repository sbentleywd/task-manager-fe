import React from "react";
import Logoutbutton from "../auth/Logoutbutton";

const DashBoard = (props: any) => {
	return (
		<div>
			<h1>My tasks</h1>
			<Logoutbutton setToken={props.setToken} />
		</div>
	);
};

export default DashBoard;
