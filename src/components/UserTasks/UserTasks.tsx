import React, { useEffect, useState } from "react";
import { getUserTasks, deleteTask, updateTask } from "../auth/utils";
import useUser from "../auth/useUser";
import Task, { TaskInterface } from "../Task/Task";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import AddCircle from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import UserTaskControls from "../UserTaskControls/UserTaskControls";

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
	const [loaded, setLoaded] = useState<boolean>(false);
	const [sortBy, setSortBy] = useState<string>("createdAt");
	const [sortOrder, setSortOrder] = useState<string>("desc");
	const [filterCompleted, setFilterCompleted] = useState<boolean>(true);
	const { user } = useUser();
	const classes = useStyles();
	const outstandingTasks = tasks.filter((task) => {
		return !task.completed;
	}).length;

	const getTasks = async () => {
		console.log("getting tasks");
		const tasks = await getUserTasks(
			user.token,
			sortBy,
			sortOrder,
			filterCompleted
		);
		setTasks(tasks);
		setLoaded(true);
	};

	// useEffect(() => {
	// 	getTasks();
	// }, []);

	useEffect(() => {
		getTasks();
	}, [filterCompleted]);

	const handleComplete = async (id: string, completed: boolean) => {
		await updateTask(user.token, id, { completed: !completed });
		getTasks();
	};

	const handleDelete = async (id: string) => {
		await deleteTask(user.token, id);
		getTasks();
	};

	return loaded ? (
		<>
			<UserTaskControls
				filterCompleted={filterCompleted}
				setFilterCompleted={setFilterCompleted}
			/>
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
		</>
	) : (
		<h1>Loading tasks</h1>
	);
};

export default UserTasks;
