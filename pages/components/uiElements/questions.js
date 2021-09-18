import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
	contentRoot: {
		display: 'flex',
	},
	drawer: {
		width: '300px',
		flexShrink: 0,
	},
	drawerPaper: {
		width: '300px',
	},
	drawerContainer: {
		overflow: 'auto',
	},
	content: {
		padding: theme.spacing(3),
		flexGrow: 1,
	},
	divider: {
		marginBottom: '16px',
	},
}));

export default function Questions(props) {
	const classes = useStyles();
	const isMobile = useMediaQuery('(max-width:600px)');

	const handleClick = (e, url) => {
		e.preventDefault();
		window.open(url, '_blank');
	};

	return (
		<div className={classes.contentRoot}>
			{!isMobile ? (
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<Toolbar />
					<div className={classes.drawerContainer}>
						<List component="nav">
							{props.data.length &&
								props.data.map((list, idx) => (
									<Link
										to={`${idx + 1}`}
										smooth={true}
										duration={100}
										spy={true}
										activeClass="active"
										offset={-85}
										key={idx}
									>
										<ListItem button key={idx}>
											<ListItemText
												primary={`${idx + 1}. ${list.Ques}`}
												key={idx}
											/>
										</ListItem>
										<Divider />
									</Link>
								))}
						</List>
					</div>
				</Drawer>
			) : null}
			<div className={classes.content}>
				<Toolbar />
				{props.data.length &&
					props.data.map((list, idx) => (
						<div key={idx} id={`${idx + 1}`}>
							<Typography variant="h6">
								{idx + 1}. {list.Ques}
							</Typography>
							<Typography component="div">{list.Ans}</Typography>
							<ButtonGroup aria-label="small button group">
								{list.example.map((item, idx) => (
									<Button
										key={idx}
										className={classes.divider}
										variant="outlined"
										color="primary"
										size="small"
										onClick={(e) => handleClick(e, item.url)}
									>
										{item.title}
									</Button>
								))}
							</ButtonGroup>
							<Divider className={classes.divider} />
						</div>
					))}
			</div>
		</div>
	);
}
