import React from 'react';
import styles from '../styles/Home.module.css';
import Content from '../components/content';
import Courses from '../components/courses';
import Navbar from '../components/navbar';
import Head from 'next/head';
import UAParser from 'ua-parser-js';
import { courses } from '../data/data';

export default function Home(props) {
	return (
		<React.Fragment>
			<Head>
				<title>My Book</title>
				<meta name="description" content="learn web development" />
			</Head>
			<div className={styles.container}>
				<Navbar isMobile={props.deviceType === 'mobile' ? true : false} />
				<Content />
			</div>
			<Courses data={courses} />
		</React.Fragment>
	);
}

Home.getInitialProps = ({ req }) => {
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
