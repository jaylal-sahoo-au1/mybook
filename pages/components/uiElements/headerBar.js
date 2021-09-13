import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: '#3f51b5',
		zIndex: theme.zIndex.drawer + 1,
	},
	title: {
		flexGrow: 1,
		letterSpacing: '3px',
		color: '#ffffff',
	},
}));

export default function Navbar(props) {
	const classes = useStyles();
	return (
		<AppBar position="fixed" className={classes.container}>
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					{props.heading}
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
