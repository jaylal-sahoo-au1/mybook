import React, { useState } from 'react';
import Navbar from '../components/uiElements/headerBar';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Typography } from '@material-ui/core';

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
}));

export default function QuestionsTemplate(props) {
	const classes = useStyles();
	const [image, setImage] = useState('');
	const [heading, setHeading] = useState('');
	const [github, setGithub] = useState('');
	const [linkedin, setlinkedin] = useState('');
	const [description, setDescription] = useState('');
	const [url, setUrl] = useState('');

	const uploadImage = () => {
		const data = new FormData();
		data.append('file', image);
		data.append('upload_preset', 'iluzlwuo');
		data.append('cloud_name', 'dpczsvkxd');
		console.log(data, 'upload');
		fetch('https://api.cloudinary.com/v1_1/dpczsvkxd/image/upload', {
			method: 'post',
			body: data,
		})
			.then((resp) => resp.json())
			.then((data) => {
				setUrl(data.url);
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
			default:
			// code block
		}
	};

	const submit = () => {
		console.log(process.env.PROD_ENV, 'kkkk');
		fetch('http://localhost:3000/api/htmlcsstemplate', {
			method: 'POST',
			body: JSON.stringify({
				img: 'kkk',
				heading: '',
				title: 'test',
				subheader: '',
				actionButton: {
					github: {
						url: 'jjjjj',
						title: 'Github Link',
					},
					linkedIn: {
						url: 'kkk',
						title: 'Github Link',
					},
				},
				paragraph: 'kkkk',
			}),
		})
			.then((resp) => console.log(resp))
			.catch((err) => console.log(err));
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
					{/*<Grid item xs={12} md={6}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">
								Select Project Stack
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={''}
								label="Select Project"
								//onChange={handleChange}
							>
								<MenuItem>HTML And CSS</MenuItem>
								<MenuItem>HTML, CSS And Javascript</MenuItem>
								<MenuItem>React JS</MenuItem>
							</Select>
						</FormControl>
    </Grid>*/}
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
						<Typography>{image.name}</Typography>
						<Button variant="contained" color="success" onClick={uploadImage}>
							Upload
						</Button>
					</Grid>
					<Grid item xs={12} md={12}>
						<Button
							variant="contained"
							color="success"
							onClick={() => submit()}
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</div>
		</React.Fragment>
	);
}
