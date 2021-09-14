import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/uiElements/headerBar';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
	htmlRoot: {
		flexGrow: 1,
	},
	container: {
		backgroundColor: '#04aa6f,',
		zIndex: theme.zIndex.drawer + 1,
	},
	title: {
		flexGrow: 1,
		letterSpacing: '3px',
	},
}));

export default function HTML() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Head>
				<title>React Projects</title>
				<meta name="description" content="React Projects" />
			</Head>
			<div className={classes.htmlRoot}>
				<Navbar heading="React Projects" />
			</div>
		</React.Fragment>
	);
}
