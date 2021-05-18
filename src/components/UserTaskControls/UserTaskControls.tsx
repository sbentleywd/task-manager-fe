import React, { SetStateAction, Dispatch } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		controlsContainer: {
			display: "flex",

			alignItems: "center",
			justifyContent: "space-between",
		},
		control: {
			display: "flex",
			alignItems: "center",
		},
		sortButton: {},
	})
);

const UserTaskControls = (props: {
	filterCompleted: boolean;
	setFilterCompleted: Dispatch<SetStateAction<boolean>>;
	sortBy: string;
	setSortBy: Dispatch<SetStateAction<string>>;
	sortOrder: string;
	setSortOrder: Dispatch<SetStateAction<string>>;
	category: string;
	setCategory: Dispatch<SetStateAction<string>>;
	userCategories: string[];
}) => {
	const classes = useStyles();

	const handleSortOrderChange = () => {
		if (props.sortOrder === "desc") props.setSortOrder("asc");
		else props.setSortOrder("desc");
	};

	return (
		<div className={classes.controlsContainer}>
			<div className={classes.control}>
				<InputLabel id="task-form-completed">
					Hide completed?
				</InputLabel>
				<Switch
					checked={props.filterCompleted}
					onChange={(e) => props.setFilterCompleted(e.target.checked)}
					name="completed"
					inputProps={{ "aria-label": "completed checkbox" }}
				/>
			</div>
			<div className={classes.control}>
				<FormControl>
					<InputLabel id="task-form-category">Category</InputLabel>
					<Select
						labelId="task-form-category"
						id="category"
						value={props.category}
						onChange={(event) =>
							props.setCategory(event.target.value as string)
						}
					>
						<MenuItem value={"All"} key={0}>
							All
						</MenuItem>
						{props.userCategories.map((category, index) => (
							<MenuItem value={category} key={index + 1}>
								{category}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
			<div className={classes.control}>
				<FormControl className={classes.control}>
					<InputLabel id="task-form-sort-by">Sort</InputLabel>
					<Select
						labelId="task-form-sort-by"
						id="sort-field"
						value={props.sortBy}
						onChange={(event) =>
							props.setSortBy(event.target.value as string)
						}
					>
						<MenuItem value={"createdAt"}>Created</MenuItem>
						<MenuItem value={"dueDate"}>Due Date</MenuItem>
						<MenuItem value={"description"}>Description</MenuItem>
					</Select>
				</FormControl>
				{props.sortOrder === "desc" ? (
					<IconButton
						className={classes.sortButton}
						onClick={handleSortOrderChange}
					>
						<ArrowDownwardIcon />
					</IconButton>
				) : (
					<IconButton
						className={classes.sortButton}
						onClick={handleSortOrderChange}
					>
						<ArrowUpwardIcon />
					</IconButton>
				)}
			</div>
		</div>
	);
};

export default UserTaskControls;
