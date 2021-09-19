import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/uiElements/headerBar';
import Head from 'next/head';
import UAParser from 'ua-parser-js';

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
				<title>CSS Interview Questions</title>
				<meta name="description" content="CSS Interview Questions" />
			</Head>
			<div className={classes.htmlRoot}>
				<Navbar heading="CSS Interview Questions" />
			</div>
		</React.Fragment>
	);
}

HTML.getInitialProps = ({ req }) => {
	let userAgent;
	if (req) {
		userAgent = req.headers['user-agent'];
	} else {
		userAgent = navigator.userAgent;
	}
	const parser = new UAParser();
	parser.setUA(userAgent);
	const result = parser.getResult();
	const deviceType = (result.device && result.device.type) || 'desktop';
	return { deviceType };
};
