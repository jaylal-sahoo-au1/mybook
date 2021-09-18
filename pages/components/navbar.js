import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { Link, animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
	navRoot: {
		flexGrow: 1,
	},
	toolbar: {
		boxShadow: 'none',
		background: '#333333',
	},
	title: {
		letterSpacing: '5px',
	},
	links: {
		display: 'flex',
		justifyContent: 'center',
		flexGrow: 1,
	},
}));

const Navbar = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.navRoot}>
			<AppBar position="fixed" className={classes.toolbar}>
				<Toolbar>
					<Typography
						variant="h4"
						className={classes.title}
						onClick={() => scroll.scrollToTop()}
					>
						My Book
					</Typography>
					<Typography className={classes.links}>
						<Link
							to=""
							className="linkBtn"
							smooth={true}
							duration={500}
							spy={true}
						>
							Projects
						</Link>
						<Link
							to="https://material-ui.com/components/avatars/#image-avatars"
							className="linkBtn"
							smooth={true}
							duration={500}
							spy={true}
						>
							Technologies
						</Link>
						<Link
							to="https://material-ui.com/components/avatars/#image-avatars"
							className="linkBtn"
							smooth={true}
							duration={500}
							spy={true}
						>
							About
						</Link>
						<Link
							to="courses"
							smooth={true}
							duration={100}
							className="linkBtn"
							spy={true}
							activeClass="active"
						>
							Courses
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
