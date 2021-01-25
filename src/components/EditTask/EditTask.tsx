import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";
import { TaskInterface } from "../Task/Task";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { updateTask } from "../auth/utils";
import useUser from "../auth/useUser";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formContainer: {
			display: "flex",
			flexWrap: "wrap",
			alignItems: "center",
			flexDirection: "column",
			marginTop: "3rem",
		},
		textField: {
			margin: theme.spacing(1),
			width: "30ch",
		},
		submit: {
			margin: theme.spacing(1),
		},
	})
);

const EditTask = (
	props: RouteComponentProps<{}, StaticContext, TaskInterface>
) => {
	const task = props.location.state;
	const [description, setDescription] = useState<String>(task.description);
	const [completed, setCompleted] = useState<boolean>(task.completed);
	const classes = useStyles();
	const { user } = useUser();

	const handleSave = async () => {
		await updateTask(user.token, task._id, { description, completed });
		window.location.href = "/";
	};

	return (
		<div className={classes.formContainer}>
			<TextField
				className={classes.textField}
				id="outlined"
				label="Description"
				variant="outlined"
				onChange={(e) => setDescription(e.target.value)}
				value={description}
			/>
			<InputLabel id="demo-simple-select-label">Completed?</InputLabel>
			<Switch
				checked={completed}
				onChange={(e) => setCompleted(e.target.checked)}
				name="checkedA"
				inputProps={{ "aria-label": "secondary checkbox" }}
			/>
			<Button
				onClick={handleSave}
				variant="contained"
				color="primary"
				className={classes.submit}
				// component={Link}
				// to={"/"}
			>
				Save
			</Button>
		</div>
	);
};

export default EditTask;
