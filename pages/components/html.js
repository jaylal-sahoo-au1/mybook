import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Drawer,
	List,
	ListItem,
	ListItemText,
	Typography,
	Toolbar,
	Divider,
	useMediaQuery,
} from '@material-ui/core';

import { htmlQuestion } from '../../data/data';
import { Link, animateScroll as scroll } from 'react-scroll';

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
}));

export default function HTMLContent(props) {
	const classes = useStyles();
	const isMobile = useMediaQuery('(max-width:600px)');

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
							{htmlQuestion.length ? (
								<React.Fragment>
									{htmlQuestion.map((list, idx) => (
										<Link
											to={`${idx + 1}`}
											smooth={true}
											duration={100}
											spy={true}
											activeClass="active"
											offset={-70}
											key={idx}
										>
											<ListItem button key={idx}>
												<ListItemText
													primary={`${idx + 1}. ${list.Ques}`}
													key={idx}
												/>
											</ListItem>
										</Link>
									))}
								</React.Fragment>
							) : null}
						</List>
					</div>
				</Drawer>
			) : null}
			<div className={classes.content}>
				<Toolbar />
				{htmlQuestion.length ? (
					<React.Fragment>
						{htmlQuestion.map((list, idx) => (
							<div key={idx} id={`${idx + 1}`}>
								<Typography variant="h6">
									{idx + 1}. {list.Ques}
								</Typography>
								<Typography component="div">{list.Ans}</Typography>
								<Divider />
								<br />
							</div>
						))}
					</React.Fragment>
				) : null}
			</div>
		</div>
	);
}
