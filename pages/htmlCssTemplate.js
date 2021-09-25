import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridList from './components/uiElements/gridList';
import Navbar from './components/uiElements/headerBar';

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

export default function HTMLTemplate(props) {
	const classes = useStyles();
	return (
		<div className={classes.htmlRoot}>
			<Navbar heading="HTML Template" />
			<GridList data={props.data} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const res = await fetch('http://mybook-theta.vercel.app/api/htmlcsstemplate');
	const data = await res.json();

	return {
		props: {
			data: data,
		},
	};
}
