import React, { useEffect, useState } from "react";
import { getUserTasks, deleteTask, updateTask } from "../auth/utils";
import useUser from "../auth/useUser";
import Task, { TaskInterface } from "../Task/Task";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import AddCircle from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		taskContainer: {
			display: "flex",
			alignItems: "center",
			flexDirection: "column",
		},
		actionButton: {
			padding: theme.spacing(1),
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

	const getTasks = async () => {
		const tasks = await getUserTasks(user.token);
		setTasks(tasks);
	};

	useEffect(() => {
		getTasks();
	}, []);

	const handleComplete = async (id: string, completed: boolean) => {
		await updateTask(user.token, id, { completed: !completed });
		getTasks();
	};

	const handleDelete = async (id: string) => {
		await deleteTask(user.token, id);
		getTasks();
	};

	return (
		<div className={classes.taskContainer}>
			<h3>You have {outstandingTasks} tasks to complete</h3>
			{tasks.map((task) => (
				<Task
					task={task}
					key={task._id}
					handleComplete={handleComplete}
					handleDelete={handleDelete}
				/>
			))}
			<Link to="/tasks/new">
				<IconButton className={classes.actionButton}>
					<AddCircle />
				</IconButton>
			</Link>
		</div>
	);
};

export default UserTasks;
