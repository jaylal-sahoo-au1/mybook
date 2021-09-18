import React from 'react';
import styles from '../styles/Home.module.css';
import Content from './components/content';
import Courses from './components/courses';
import Navbar from './components/navbar';
import Head from 'next/head';
import { courses } from '../data/data';

export default function Home(props) {
	return (
		<React.Fragment>
			<Head>
				<title>My Book</title>
				<meta name="description" content="learn web development" />
			</Head>
			<div className={styles.container}>
				<Navbar />
				<Content />
			</div>
			<Courses data={courses} />
		</React.Fragment>
	);
}
