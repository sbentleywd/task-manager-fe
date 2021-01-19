import userEvent from "@testing-library/user-event";
import React from "react";
import Logoutbutton from "../auth/Logoutbutton";
import useUser from "../auth/useUser";
import { UserInterface } from "../auth/useUser";
import UserTasks from "../UserTasks/UserTasks";

const DashBoard = (props: { setUser: (user: UserInterface) => void }) => {
	const { user } = useUser();
	return (
		<div>
			<h1>Welcome {user.user!.name}</h1>
			<UserTasks />
			<Logoutbutton setUser={props.setUser} />
		</div>
	);
};

export default DashBoard;
