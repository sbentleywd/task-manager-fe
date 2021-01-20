import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		title: {
			margin: "0.3em",
			flexGrow: 1,
		},
	})
);

export default useStyles;
