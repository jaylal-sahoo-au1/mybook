import { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
	menu: {
		display: 'flex',
		justifyContent: 'right',
		flexGrow: 1,
	},
}));

const Navbar = (props) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const classes = useStyles();
	const isMobile = useMediaQuery('(max-width:600px');

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
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
					{props.isMobile ? (
						<Typography className={classes.menu}>
							<MenuIcon
								id="menu-button"
								aria-controls="menu-button"
								aria-haspopup="true"
								aria-expanded={open ? 'true' : undefined}
								onClick={handleClick}
							/>
							<Menu
								id="mybook-menu"
								aria-labelledby="mybook-menu"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
							>
								<MenuItem>
									<Link
										to=""
										className="linkBtn"
										smooth={true}
										duration={500}
										spy={true}
										onClick={handleClose}
									>
										Projects
									</Link>
								</MenuItem>
								<MenuItem>
									<Link
										to=""
										className="linkBtn"
										smooth={true}
										duration={500}
										spy={true}
										onClick={handleClose}
									>
										Technologies
									</Link>
								</MenuItem>
								<MenuItem>
									<Link
										to=""
										className="linkBtn"
										smooth={true}
										duration={500}
										spy={true}
										onClick={handleClose}
									>
										About
									</Link>
								</MenuItem>
								<MenuItem>
									<Link
										to="courses"
										smooth={true}
										duration={100}
										className="linkBtn"
										spy={true}
										activeClass="active"
										onClick={handleClose}
									>
										Courses
									</Link>
								</MenuItem>
							</Menu>
						</Typography>
					) : (
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
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
