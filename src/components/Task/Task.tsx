import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Done from "@material-ui/icons/Done";
import Clear from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";

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
			marginBottom: theme.spacing(1),
			width: "50%",
		},
		main: {
			flexGrow: 1,
		},
		content: {
			display: "flex",
			paddingBottom: 0,
		},
	})
);

const formatDate = (dateString: string) => {
	const date = new Date(dateString);

	return date.toDateString();
};

const Task = (props: { task: TaskInterface }) => {
	const classes = useStyles();
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

				{props.task.completed ? <Done /> : <Clear />}
			</CardContent>
			<CardActions>
				<IconButton
					aria-label="edit-task"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={() => console.log("editing task")}
					color="inherit"
				>
					<Edit />
				</IconButton>
				<IconButton
					aria-label="delete-task"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={() => console.log("deleting task")}
					color="inherit"
				>
					<Delete />
				</IconButton>
			</CardActions>
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
