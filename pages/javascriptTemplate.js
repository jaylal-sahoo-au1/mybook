import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/uiElements/headerBar';
import GridList from './components/uiElements/gridList';
import Head from 'next/head';
import { jsTemplate } from '../data/data';

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
				<title>JavaScript Projects</title>
				<meta name="description" content="JavaScript Projects" />
			</Head>
			<div className={classes.htmlRoot}>
				<Navbar heading="JavaScript Projects" />
				<GridList data={jsTemplate} />
			</div>
		</React.Fragment>
	);
}
