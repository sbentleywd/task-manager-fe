import React from "react";

import useUser from "../auth/useUser";

import UserTasks from "../UserTasks/UserTasks";
import Grid from "@material-ui/core/Grid";

const DashBoard = () => {
	const { user } = useUser();

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<h1>Welcome {user.user!.name}</h1>
			</Grid>
			<Grid item xs={12}>
				<UserTasks />
			</Grid>
			<Grid item xs={12}></Grid>
		</Grid>
	);
};

export default DashBoard;
