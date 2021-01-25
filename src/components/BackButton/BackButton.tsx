import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		actionButton: {
			padding: theme.spacing(1),
		},
	})
);

const BackButton = () => {
	const classes = useStyles();
	return (
		<Link to="/">
			<IconButton className={classes.actionButton}>
				<ArrowBack />
			</IconButton>
		</Link>
	);
};

export default BackButton;
