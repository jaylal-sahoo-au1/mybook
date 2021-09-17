import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridList from './components/uiElements/gridList';
import Navbar from './components/uiElements/headerBar';
import { htmlTemplateContent } from '../data/data';

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
	return (
		<div className={classes.htmlRoot}>
			<Navbar heading="HTML Template" />
			<GridList data={htmlTemplateContent} />
		</div>
	);
}
