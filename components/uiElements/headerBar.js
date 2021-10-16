import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: '#3f51b5',
		zIndex: theme.zIndex.drawer + 1,
	},
	title: {
		flexGrow: 1,
		letterSpacing: '3px',
		color: '#ffffff',
	},
	project: {
		color: '#fff',
		border: '1px solid #fff',
	},
}));

export default function Navbar(props) {
	const classes = useStyles();
	const router = useRouter();

	const redirect = () => {
		router.push({
			pathname: '/addproject',
			query: fn(),
		});
	};

	const fn = () => {
		if (props.heading === 'HTML Template') {
			return 'projecttype=html_css';
		} else if (props.heading === 'JavaScript Projects') {
			return 'projecttype=javacript';
		}
	};
	return (
		<AppBar position="fixed" className={classes.container}>
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					{props.heading}
				</Typography>
				{props.addProject ? (
					<Button
						variant="outlined"
						className={classes.project}
						onClick={() => redirect()}
					>
						Add Project
					</Button>
				) : null}
			</Toolbar>
		</AppBar>
	);
}
