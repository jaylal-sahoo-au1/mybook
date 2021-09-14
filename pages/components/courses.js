import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Grid,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Typography,
	Divider,
} from '@material-ui/core';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
	coursesRoot: {
		flexGrow: 1,
		backgroundColor: '#fff1a3',
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	heading: {
		textAlign: 'center',
		padding: '10px',
		letterSpacing: '3px',
	},
	media: {
		height: '50px',
	},
	container: {
		padding: '16px',
	},
	button: {
		fontWeight: '700',
	},
}));

export default function Courses(props) {
	const classes = useStyles();
	const router = useRouter();

	const handleClick = (e, url) => {
		e.preventDefault();
		router.push(url);
	};

	const returnActionButton = (item) => {
		let items = Object.keys(item).map((action, idx) => (
			<a
				className="link2"
				onClick={(e) => handleClick(e, item[action])}
				key={idx}
			>
				{action}
			</a>
		));
		return items;
	};

	const renderCourses = () => {
		let items =
			props.data &&
			props.data.map((list, idx) => (
				<Grid item xs={12} md={3} lg={3} key={idx}>
					<Card>
						<CardHeader title={list.title} className={classes.heading} />
						<Divider />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								{list.short_description}
							</Typography>
						</CardContent>
						<Divider />
						<CardActions>{returnActionButton(list.action)}</CardActions>
					</Card>
				</Grid>
			));

		return items;
	};

	return (
		<div className={classes.coursesRoot} id="courses">
			<Typography variant="h4" className={classes.heading}>
				Courses
			</Typography>
			<Divider />
			<Grid container spacing={2} p={2} className={classes.container}>
				{renderCourses()}
			</Grid>
		</div>
	);
}
