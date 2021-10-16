import React, { useState } from 'react';
import Navbar from '../components/uiElements/headerBar';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import AddIcon from '@material-ui/icons/Add';
import { Typography } from '@material-ui/core';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
	htmlRoot: {
		flexGrow: 1,
	},
	container: {
		backgroundColor: '#04aa6f,',
		zIndex: theme.zIndex.drawer + 1,
	},
	title: {
		flexGrow: 1,
		letterSpacing: '3px',
	},
	textField: {
		width: '100%',
	},
	padding: {
		paddingLeft: '10px',
		paddingRight: '10px',
	},
	submitMain: {
		display: 'flex',
		justifyContent: 'center',
	},
	submit: {
		border: '1px solid #1976d2',
		color: '#1976d2',
	},
}));

export default function AddProject(props) {
	const classes = useStyles();
	const [image, setImage] = useState('');
	const [heading, setHeading] = useState('');
	const [github, setGithub] = useState('');
	const [linkedin, setlinkedin] = useState('');
	const [description, setDescription] = useState('');
	const [name, nameFn] = useState('');
	const [messageKey, messageKeyFn] = useState(false);
	const [url, setUrl] = useState('');
	const [message, messageFn] = useState('');
	const [livelink, livelinkFn] = useState('');
	const router = useRouter();

	const uploadImage = () => {
		const data = new FormData();
		data.append('file', image);
		data.append('upload_preset', 'iluzlwuo');
		data.append('cloud_name', 'dpczsvkxd');
		fetch('https://api.cloudinary.com/v1_1/dpczsvkxd/image/upload', {
			method: 'post',
			body: data,
		})
			.then((resp) => resp.json())
			.then((data) => {
				setUrl(data.url);
				messageKeyFn(true);
				messageFn('Image uploaded successfully');
			})
			.catch((err) => console.log(err));
	};

	const onChangeField = (val, action) => {
		switch (action) {
			case 'heading':
				setHeading(val);
				break;
			case 'github':
				setGithub(val);
				break;
			case 'linkedin':
				setlinkedin(val);
				break;
			case 'description':
				setDescription(val);
				break;
			case 'name':
				nameFn(val);
				break;
			case 'livelink':
				livelinkFn(val);
				break;
			default:
			// code block
		}
	};

	const submit = () => {
		fetch('https://mybook-theta.vercel.app/api/htmlcsstemplate', {
			method: 'POST',
			body: JSON.stringify({
				img: url,
				heading: '',
				title: heading,
				subheader: `Submitted By: ${name}`,
				actionButton: {
					github: {
						url: github,
						title: 'Github Link',
					},
					linkedIn: {
						url: linkedin,
						title: 'LinkedIn Link',
					},
					livelink: {
						url: livelink,
						title: 'Go to website',
					},
				},
				paragraph: description,
				verify: false,
				project_type: router.query.projecttype,
			}),
		})
			.then((resp) => {
				messageKeyFn(true);
				messageFn(resp.message);
				router.back();
			})
			.catch((err) => messageFn(resp.message));
	};

	return (
		<React.Fragment>
			<Head>
				<title>Add Projects</title>
				<meta name="Add Projects" content="Add Projects" />
			</Head>
			<div className={classes.htmlRoot}>
				<Navbar heading="Add Project" />
				<Toolbar />
				<Grid container className="p15" spacing={2}>
					<Grid item xs={12} md={6}>
						<TextField
							id="outlined-basic"
							label="Your Name"
							variant="outlined"
							className={classes.textField}
							onChange={(e) => onChangeField(e.target.value, 'name')}
							value={name}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							id="outlined-basic"
							label="Heading"
							variant="outlined"
							className={classes.textField}
							onChange={(e) => onChangeField(e.target.value, 'heading')}
							value={heading}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							id="outlined-basic"
							label="Project Github URL"
							variant="outlined"
							className={classes.textField}
							onChange={(e) => onChangeField(e.target.value, 'github')}
							value={github}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							id="outlined-basic"
							label="Your LinkedIn Profile URL"
							variant="outlined"
							className={classes.textField}
							onChange={(e) => onChangeField(e.target.value, 'linkedin')}
							value={linkedin}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							id="outlined-basic"
							label="Project Live Link"
							variant="outlined"
							className={classes.textField}
							onChange={(e) => onChangeField(e.target.value, 'livelink')}
							value={livelink}
						/>
					</Grid>
					<Grid item xs={12} md={12}>
						<TextField
							id="outlined-basic"
							label="Description"
							multiline
							rows={2}
							rowsMax={4}
							variant="outlined"
							className={classes.textField}
							onChange={(e) => onChangeField(e.target.value, 'description')}
							value={description}
						/>
					</Grid>
					<Grid item xs={12} md={12}>
						<label htmlFor="upload-photo">
							<input
								style={{ display: 'none' }}
								id="upload-photo"
								name="upload-photo"
								type="file"
								onChange={(e) => setImage(e.target.files[0])}
							/>
							<Fab
								color="primary"
								size="small"
								component="span"
								aria-label="add"
								variant="extended"
							>
								<AddIcon /> Browse photo
							</Fab>
						</label>
						<Typography component="span" className={classes.padding}>
							{image.name}
						</Typography>
						<Button
							variant="outlined"
							onClick={uploadImage}
							className={classes.submit}
							disabled={!image.name}
						>
							Upload
						</Button>
					</Grid>
					<Grid item xs={12} md={12} className={classes.submitMain}>
						<Button
							variant="outlined"
							onClick={() => submit()}
							size="large"
							className={classes.submit}
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</div>
			<Snackbar
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={messageKey}
				autoHideDuration={1000}
				message={message}
				onClose={() => messageKeyFn(false)}
			/>
		</React.Fragment>
	);
}
