import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import BookIcon from '@material-ui/icons/Book';
import CodeIcon from '@material-ui/icons/Code';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
	htmlRoot: {
		flexGrow: 1,
		padding: '16px',
	},
	cardcontent1: {
		height: '50vh',
		overflow: 'auto',
	},
	cardcontent2: {
		height: '80px',
		overflow: 'auto',
	},
	linkedIn: {
		color: '#0a66c2',
	},
	image: {
		'&:hover': {
			opacity: '0.5',
			cursor: 'pointer',
		},
	},
}));

export default function GridList(props) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const styleFn = (item) => {
		if (item?.img) {
			return classes.cardcontent2;
		} else {
			return classes.cardcontent1;
		}
	};

	const redirect = (item) => {
		window.open(`${item}`, '_blank');
	};

	return (
		<React.Fragment>
			<Toolbar></Toolbar>
			<div className={classes.htmlRoot} role="main">
				<Grid container spacing={2}>
					{props.data &&
						props.data.map((list, idx) => (
							<Grid item xs={12} md={6} lg={4} key={idx}>
								<Card>
									<CardHeader
										action={
											<Tooltip
												title={
													list?.actionButton?.linkedIn?.title ||
													'Go to LinkedIn profile'
												}
												onClick={() =>
													redirect(list?.actionButton?.linkedIn?.url)
												}
											>
												<IconButton aria-label="settings">
													<LinkedInIcon className={classes.linkedIn} />
												</IconButton>
											</Tooltip>
										}
										title={list.title}
										subheader={list.subheader}
									/>
									{list?.img ? (
										<React.Fragment>
											<Image
												src={list.img}
												width={500}
												height={333}
												alt="Browser not supporting"
												className={
													list?.actionButton?.livelink?.url ? classes.image : ''
												}
												onClick={() =>
													redirect(list?.actionButton?.livelink?.url)
												}
											/>
										</React.Fragment>
									) : null}
									<CardContent className={styleFn(list)}>
										{list?.para ? (
											<Typography component="div" variant="body2">
												{list.para}
											</Typography>
										) : null}
										{list?.paragraph ? (
											<Typography
												variant="body2"
												color="textSecondary"
												component="p"
											>
												{list.paragraph}
											</Typography>
										) : null}
									</CardContent>
									<CardActions disableSpacing>
										{list?.actionButton?.github ? (
											<Tooltip title={list.actionButton.github.title}>
												<IconButton
													aria-label={list.actionButton.github.title}
													onClick={() => redirect(list.actionButton.github.url)}
												>
													<GitHubIcon />
												</IconButton>
											</Tooltip>
										) : null}
										{list?.actionButton?.blog ? (
											<Tooltip title={list.actionButton.blog.title}>
												<IconButton
													aria-label={list.actionButton.blog.title}
													onClick={() => redirect(list.actionButton.blog.url)}
												>
													<BookIcon />
												</IconButton>
											</Tooltip>
										) : null}
										{list?.actionButton?.code ? (
											<Tooltip title={list.actionButton.blog.title}>
												<IconButton
													aria-label={list.actionButton.blog.title}
													onClick={() => redirect(list.actionButton.blog.url)}
												>
													<CodeIcon />
												</IconButton>
											</Tooltip>
										) : null}
									</CardActions>
								</Card>
							</Grid>
						))}
				</Grid>
			</div>
		</React.Fragment>
	);
}
