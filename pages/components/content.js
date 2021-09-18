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
		flexDirection: 'column',
	},
	textWithMarginBt: {
		letterSpacing: '5px',
		color: '#fff',
		marginBottom: '15px',
	},
	textWithMargintp: {
		letterSpacing: '5px',
		color: '#fff',
		marginTop: '15px',
	},
}));

const Content = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Box className={classes.container}>
				<Typography variant="h5" className={classes.text}>
					START YOUR JOURNEY - WEB DEVELOPMENT
				</Typography>
				<Typography
					variant="p"
					component="div"
					className={classes.textWithMargintp}
				>
					We provide a platform where you can learn
				</Typography>
				<Typography
					variant="p"
					component="div"
					className={classes.textWithMarginBt}
				>
					and start your web development career
				</Typography>
				<Typography variant="p" component="div" className={classes.text}>
					We have separate sections for each course which includes
				</Typography>
				<Typography variant="p" component="div" className={classes.text}>
					frequently asked interview questions and related project
				</Typography>
			</Box>
		</React.Fragment>
	);
};

export default Content;
