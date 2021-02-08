import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Done from "@material-ui/icons/Done";
import Clear from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";

import useUser from "../auth/useUser";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		title: {
			fontSize: 14,
		},
		date: {},
		submit: {
			margin: theme.spacing(1),
		},
		root: {
			minWidth: 275,
			marginBottom: theme.spacing(2),

			width: "50%",
		},
		main: {
			width: "100%",
			display: "flex",
			justifyContent: "space-between",
		},
		content: {
			display: "flex",
			padding: theme.spacing(2),
			paddingBottom: 0,
			flexWrap: "wrap",
			flexDirection: "column",
		},
		complete: {
			color: "#4caf50",
		},
		notComplete: {
			color: "#ff1744",
		},
		actionButton: {
			padding: theme.spacing(1),
		},
		taskTitle: {
			marginBottom: theme.spacing(1),
		},
		secondary: {
			display: "flex",
			width: "100%",
			justifyContent: "space-between",
		},
		dates: {
			display: "flex",
			justifyContent: "center",
			flexDirection: "column",
			flexGrow: 1,
			flexShrink: 0,
		},
		actions: {
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "flex-end",
			alignItems: "center",
		},
	})
);

const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toDateString();
};

const Task = (props: {
	task: TaskInterface;
	handleDelete: (id: string) => void;
	handleComplete: (id: string, completed: boolean) => void;
}) => {
	const classes = useStyles();
	const { user } = useUser();

	return (
		<Card className={classes.root}>
			<CardContent className={classes.content}>
				<div className={classes.main}>
					<Typography
						className={classes.taskTitle}
						variant="h5"
						component="h2"
					>
						{props.task.description}
					</Typography>

					<Checkbox
						checked={props.task.completed}
						color="primary"
						onChange={() =>
							props.handleComplete(
								props.task._id,
								props.task.completed
							)
						}
					/>
				</div>
				<div className={classes.secondary}>
					<div className={classes.dates}>
						<Typography
							className={classes.date}
							color="textSecondary"
						>
							Created: {formatDate(props.task.createdAt)}
						</Typography>
						{props.task.dueDate ? (
							<Typography
								className={classes.date}
								color="textSecondary"
							>
								Due: {formatDate(props.task.dueDate)}
							</Typography>
						) : null}
					</div>
					<div className={classes.actions}>
						<Link
							to={{
								pathname: `/tasks/edit/${props.task._id}`,
								state: props.task,
							}}
						>
							<IconButton className={classes.actionButton}>
								<Edit />
							</IconButton>
						</Link>
						<IconButton
							className={classes.actionButton}
							onClick={() => props.handleDelete(props.task._id)}
						>
							<Delete />
						</IconButton>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default Task;

export interface TaskInterface {
	completed: boolean;
	_id: string;
	description: string;
	owner: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	dueDate?: string;
}
