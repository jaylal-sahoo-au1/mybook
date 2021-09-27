import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UAParser from 'ua-parser-js';
import Navbar from './components/uiElements/headerBar';
import Questions from './components/uiElements/questions';
import { htmlQuestion, cssQuestions } from '../data/data';
import Head from 'next/head';
import { useRouter } from 'next/router';

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

export default function QuestionsTemplate(props) {
	const classes = useStyles();
	const { query } = useRouter();

	const renderQuestion = () => {
		if (query?.page === 'htmlQuestion') {
			return htmlQuestion;
		} else if (query?.page === 'cssQuestion') {
			return cssQuestions;
		}
	};

	return (
		<React.Fragment>
			<Head>
				<title>{query?.heading}</title>
				<meta name="description" content="html interview questions" />
			</Head>
			<div className={classes.htmlRoot}>
				<Navbar heading={query?.heading} />
				{renderQuestion().length ? (
					<Questions
						data={renderQuestion()}
						isMobile={props.deviceType === 'mobile' ? true : false}
					/>
				) : null}
			</div>
		</React.Fragment>
	);
}

QuestionsTemplate.getInitialProps = ({ req }) => {
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
	return {
		deviceType,
	};
};
