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

import useUser from "../auth/useUser";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		title: {
			fontSize: 14,
		},
		created: {},
		submit: {
			margin: theme.spacing(1),
		},
		root: {
			minWidth: 275,
			marginBottom: theme.spacing(2),

			width: "50%",
		},
		main: {
			flexGrow: 1,
		},
		content: {
			display: "flex",
			padding: theme.spacing(3),
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
					<Typography variant="h5" component="h2">
						{props.task.description}
					</Typography>
					<Typography
						className={classes.created}
						color="textSecondary"
					>
						Created: {formatDate(props.task.createdAt)}
					</Typography>
				</div>
				<CardActions>
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
					<IconButton
						className={classes.actionButton}
						onClick={() =>
							props.handleComplete(
								props.task._id,
								props.task.completed
							)
						}
					>
						{props.task.completed ? (
							<Done className={classes.complete} />
						) : (
							<Clear className={classes.notComplete} />
						)}
					</IconButton>
				</CardActions>
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
}
