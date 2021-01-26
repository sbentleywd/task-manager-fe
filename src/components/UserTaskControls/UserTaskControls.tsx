import React, { SetStateAction, Dispatch } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		controlsContainer: {
			display: "flex",
			flexWrap: "wrap",
			alignItems: "center",
			justifyContent: "flex-end",
		},
	})
);

const UserTaskControls = (props: {
	filterCompleted: boolean;
	setFilterCompleted: Dispatch<SetStateAction<boolean>>;
}) => {
	const classes = useStyles();
	return (
		<div className={classes.controlsContainer}>
			<InputLabel id="task-form-completed">Hide completed?</InputLabel>
			<Switch
				checked={props.filterCompleted}
				onChange={(e) => props.setFilterCompleted(e.target.checked)}
				name="completed"
				inputProps={{ "aria-label": "completed checkbox" }}
			/>
		</div>
	);
};

export default UserTaskControls;
