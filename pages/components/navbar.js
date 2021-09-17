import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link, animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
	navRoot: {
		flexGrow: 1,
	},
	toolbar: {
		backgroundColor: 'rgba(0,0,0,0)',
		boxShadow: 'none',
	},
	title: {
		letterSpacing: '5px',
	},
	links: {
		display: 'flex',
		justifyContent: 'center',
		flexGrow: 1,
	},
	instagram: {
		color: 'rgb(228, 64, 95)',
	},
	facebook: {
		color: 'rgb(24, 119, 242)',
	},
	linked: {
		color: 'rgb(10, 102, 194)',
	},
	avatarBody: {
		backgroundColor: 'rgba(0,0,0,0)',
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
					<Avatar className={classes.avatarBody}>
						<InstagramIcon className={classes.instagram} />
					</Avatar>
					<Avatar className={classes.avatarBody}>
						<FacebookIcon className={classes.facebook} />
					</Avatar>
					<Avatar className={classes.avatarBody}>
						<LinkedInIcon className={classes.linked} />
					</Avatar>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
