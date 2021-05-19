import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import { getUserCategories } from "../auth/utils";
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
	task: {
		description: string;
		completed: boolean;
		dueDate?: string;
		category?: string;
	};
	handleSave: (
		description: string,
		completed: boolean,
		dueDate: Date | null,
		category: string
	) => void;
}) => {
	const classes = useStyles();
	const [description, setDescription] = useState<string>(
		props.task.description
	);
	const [completed, setCompleted] = useState<boolean>(props.task.completed);
	const [category, setCategory] = useState<string>(
		props.task.category ? props.task.category : "General"
	);
	const [selectedDate, setSelectedDate] = React.useState<Date | null>(
		props.task.dueDate ? new Date(props.task.dueDate!) : new Date()
	);
	const [categories, setCategories] = useState<string[]>([]);
	const [addCategory, setAddCategory] = useState<boolean>(false);
	const { user, setUser } = useUser();
	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	const getCategories = async () => {
		const defaultCategories = ["General", "Work", "Exercise"];
		const userCategories = await getUserCategories(user.token, false);
		setCategories([...new Set([...userCategories, ...defaultCategories])]);
	};

	useEffect(() => {
		getCategories();
	}, []);

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
			<Select
				labelId="task-form-category"
				id="category"
				value={category}
				onChange={(event) => setCategory(event.target.value as string)}
			>
				{categories.map((category, i) => {
					return (
						<MenuItem value={category} key={i}>
							{category}
						</MenuItem>
					);
				})}
			</Select>
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
					props.handleSave(
						description,
						completed,
						selectedDate,
						category
					)
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
