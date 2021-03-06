import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { UserInterface } from "../auth/useUser";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useUser from "../auth/useUser";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		title: {
			margin: "0.3em",
			flexGrow: 1,
		},
		user: {
			display: "flex",
			alignItems: "center",
		},
		link: {
			textDecoration: "none",
			color: "inherit",
		},
	})
);

const AuthenticatedNavBar = (props: {
	setUser: (user: UserInterface) => void;
}) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const { user } = useUser();

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		props.setUser({
			token: "",
		});
		// window.location.href = "/";
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h4" className={classes.title}>
					Task-Manager
				</Typography>

				<div className={classes.user}>
					<Typography>{user.user?.name}</Typography>
					<IconButton
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleMenu}
						color="inherit"
					>
						<AccountCircle fontSize="large" />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						open={open}
						onClose={handleClose}
					>
						{/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
						<MenuItem>
							<Link to="/" className={classes.link}>
								My Tasks
							</Link>
						</MenuItem>
						<MenuItem onClick={handleLogout}>
							<Link to="/" className={classes.link}>
								Log Out
							</Link>
						</MenuItem>
					</Menu>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default AuthenticatedNavBar;
