import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from './components/uiElements/gridList';
import Navbar from './components/uiElements/headerBar';
import { javascriptContent } from '../data/data';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
	htmlRoot: {
		flexGrow: 1,
	},
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

export default function HTMLTemplate() {
	const classes = useStyles();
	const { query } = useRouter();
	return (
		<div className={classes.htmlRoot}>
			<Navbar heading={query.heading} />
			<GridList data={javascriptContent} />
		</div>
	);
}
