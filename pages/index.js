import React from 'react';
import styles from '../styles/Home.module.css';
import Content from './components/content';
import Courses from './components/courses';
import Navbar from './components/navbar';
import Head from 'next/head';

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
			<Courses data={props.data} />
		</React.Fragment>
	);
}

export async function getStaticProps() {
	const response = await fetch(`http://localhost:3000/api`);
	const data = await response.json();

	return {
		props: {
			data: data,
		},
	};
}
