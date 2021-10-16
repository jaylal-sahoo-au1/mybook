import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
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
	imageLayout: {
		height: '100%',
		width: '100%',
		position: 'relative',
	},
	image: {
		height: '100%',
		width: '100%',
	},
	hoverly: {
		position: 'absolute',
		left: 0,
		top: 0,
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0,
		transition: 'opacity 0.25s',
		background: 'rgba(0,0,0,0.6)',
		'&:hover': {
			opacity: 1,
		},
	},
	btnLive: {
		color: '#fff',
		border: '1px solid #fff',
		transition: 'all 0.25s',
		'&:hover': {
			opacity: 0.7,
			color: '#1976d2',
			border: '1px solid #1976d2',
		},
	},
}));

export default function GridList(props) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 100}`;
	};
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
						props.data.map((list, idx) => {
							console.log(list);
							if (list.verify == 'true') {
								return (
									<Grid item xs={12} md={6} lg={4} key={idx}>
										<Card>
											<CardHeader
												action={
													list?.actionButton?.linkedIn ? (
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
													) : null
												}
												title={list.title}
												subheader={list.subheader}
											/>
											{list?.img ? (
												<div className={classes.imageLayout}>
													<Image
														loader={myLoader}
														src={list.img}
														alt="Browser not supporting"
														width={500}
														height={333}
														className={
															list?.actionButton?.livelink?.url
																? classes.image
																: ''
														}
													/>
													{list?.actionButton?.livelink?.url ? (
														<div className={classes.hoverly}>
															<Button
																variant="outlined"
																size="small"
																className={classes.btnLive}
																onClick={() =>
																	list?.actionButton?.livelink?.url
																		? redirect(
																				list?.actionButton?.livelink?.url
																		  )
																		: ''
																}
															>
																Go Live
															</Button>
														</div>
													) : null}
												</div>
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
															onClick={() =>
																redirect(list.actionButton.github.url)
															}
														>
															<GitHubIcon />
														</IconButton>
													</Tooltip>
												) : null}
												{list?.actionButton?.blog ? (
													<Tooltip title={list.actionButton.blog.title}>
														<IconButton
															aria-label={list.actionButton.blog.title}
															onClick={() =>
																redirect(list.actionButton.blog.url)
															}
														>
															<BookIcon />
														</IconButton>
													</Tooltip>
												) : null}
												{list?.actionButton?.code ? (
													<Tooltip title={list.actionButton.blog.title}>
														<IconButton
															aria-label={list.actionButton.blog.title}
															onClick={() =>
																redirect(list.actionButton.blog.url)
															}
														>
															<CodeIcon />
														</IconButton>
													</Tooltip>
												) : null}
											</CardActions>
										</Card>
									</Grid>
								);
							}
						})}
				</Grid>
			</div>
		</React.Fragment>
	);
}
