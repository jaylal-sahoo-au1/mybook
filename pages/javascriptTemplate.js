import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/uiElements/headerBar';
import GridList from '../components/uiElements/gridList';
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

export default function HTML(props) {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Head>
				<title>JavaScript Projects</title>
				<meta name="description" content="JavaScript Projects" />
			</Head>
			<div className={classes.htmlRoot}>
				<Navbar heading="JavaScript Projects" addProject={true} />
				<GridList data={props.data} />
			</div>
		</React.Fragment>
	);
}

export async function getServerSideProps(context) {
	const res = await fetch(process.env.PROD_ENV + '/api/jstemplate');
	const data = await res.json();

	return {
		props: {
			data: data,
		},
	};
}
