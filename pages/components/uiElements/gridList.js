import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
	Grid,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	IconButton,
	Typography,
	Toolbar,
	Tooltip,
	useMediaQuery,
} from '@material-ui/core';
import Image from 'next/image';
import BookIcon from '@material-ui/icons/Book';
import CodeIcon from '@material-ui/icons/Code';

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
	cardcontent: {
		height: '50vh',
		overflow: 'auto',
	},
}));

export default function GridList(props) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const isMobile = useMediaQuery('(min-width:600px)');

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const styleFn = (item) => {
		if (item?.style && isMobile) {
			if (item.style.height === '50') {
				return classes.cardcontent;
			} else {
				return '';
			}
		} else {
			return '';
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
									<CardHeader title={list.title} subheader={list.subheader} />
									{list?.img ? (
										<Image
											src={list.img}
											width={500}
											height={333}
											alt="Browser not supporting"
										/>
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
