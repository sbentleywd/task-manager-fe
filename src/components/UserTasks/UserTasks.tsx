import React, { useEffect, useState } from "react";
import { getUserTasks } from "../auth/utils";
import useUser from "../auth/useUser";
import Task, { TaskInterface } from "../Task/Task";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		taskContainer: {
			display: "flex",
			alignItems: "center",
			flexDirection: "column",
		},
	})
);

const UserTasks = () => {
	const [tasks, setTasks] = useState<TaskInterface[]>([]);
	const { user } = useUser();
	const classes = useStyles();
	const outstandingTasks = tasks.filter((task) => {
		return !task.completed;
	}).length;

	useEffect(() => {
		const getTasks = async () => {
			const tasks = await getUserTasks(user.token);
			setTasks(tasks);
		};
		getTasks();
	}, []);

	return (
		<div className={classes.taskContainer}>
			<h3>You have {outstandingTasks} tasks to complete</h3>
			{tasks.map((task) => (
				<Task task={task} key={task._id} />
			))}
		</div>
	);
};

export default UserTasks;
