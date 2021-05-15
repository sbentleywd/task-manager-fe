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
	const [category, setCategory] = useState<string>("All");
	const [categories, setCategories] = useState<string[]>([]);
	const { user, setUser } = useUser();
	const classes = useStyles();
	const outstandingTasks = tasks.length
		? tasks.filter((task) => {
				return !task.completed;
		  }).length
		: 0;
	const overdueTasks = tasks.length
		? tasks.filter((task) => {
				const overDue = task.dueDate
					? Date.parse(task.dueDate!) < Date.now()
					: false;
				return !task.completed && overDue;
		  }).length
		: 0;

	const getTasks = async () => {
		const tasks = await getUserTasks(
			user.token,
			sortBy,
			sortOrder,
			filterCompleted,
			category
		);
		if ((tasks as { error: string }).error) {
			setUser({
				token: "",
			});
			window.location.href = "/";
		} else {
			setTasks(tasks as TaskInterface[]);
			setLoaded(true);
		}
	};

	const getCategories = async () => {
		// get all tasks
		const userTasks = await getUserTasks(
			user.token,
			sortBy,
			sortOrder,
			filterCompleted,
			"All"
		);

		const userCategories = (userTasks as TaskInterface[]).map(
			(task: TaskInterface) => task.category
		);
		setCategories([...new Set(userCategories)] as string[]);
	};

	// update tasks when filters change
	useEffect(() => {
		getTasks();
	}, [filterCompleted, sortBy, sortOrder, category]);

	// update categories when filterCompleted change
	useEffect(() => {
		getCategories();
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
				sortBy={sortBy}
				setSortBy={setSortBy}
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
				category={category}
				setCategory={setCategory}
				userCategories={categories}
			/>
			<div className={classes.taskContainer}>
				<h3>
					You have {outstandingTasks} tasks to complete.{" "}
					{overdueTasks} tasks are overdue
				</h3>

				{tasks.length
					? tasks.map((task) => (
							<Task
								task={task}
								key={task._id}
								handleComplete={handleComplete}
								handleDelete={handleDelete}
							/>
					  ))
					: null}
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
