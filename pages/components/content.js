import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	text: {
		letterSpacing: '5px',
		color: '#fff',
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '60vh',
	},
}));

const Content = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Box className={classes.container}>
				<Typography variant="h5" className={classes.text}>
					START YOUR JOURNEY
				</Typography>
			</Box>
		</React.Fragment>
	);
};

export default Content;
