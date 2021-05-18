import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import useUser from "../auth/useUser";

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

const TaskForm = (props: {
	task: { description: string; completed: boolean; dueDate?: string };
	handleSave: (
		description: string,
		completed: boolean,
		dueDate: Date | null
	) => void;
}) => {
	const classes = useStyles();
	const [description, setDescription] = useState<string>(
		props.task.description
	);
	const [completed, setCompleted] = useState<boolean>(props.task.completed);
	const [selectedDate, setSelectedDate] = React.useState<Date | null>(
		props.task.dueDate ? new Date(props.task.dueDate!) : new Date()
	);

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	useEffect(() => {
		const defaultCategories = ["General", "Work", "Exercise"];
	});

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

			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker
					margin="normal"
					id="date-picker-dialog"
					label="Due date"
					format="dd/MM/yyyy"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						"aria-label": "change date",
					}}
				/>
			</MuiPickersUtilsProvider>
			<InputLabel id="task-form-completed">Completed?</InputLabel>
			<Switch
				checked={completed}
				onChange={(e) => setCompleted(e.target.checked)}
				name="completed"
				inputProps={{ "aria-label": "completed checkbox" }}
			/>

			<Button
				onClick={() =>
					props.handleSave(description, completed, selectedDate)
				}
				variant="contained"
				color="primary"
				className={classes.submit}
			>
				Save
			</Button>
		</div>
	);
};

export default TaskForm;
