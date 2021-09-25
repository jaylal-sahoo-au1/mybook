import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/uiElements/headerBar';
import Head from 'next/head';
import Questions from './components/uiElements/questions';
import { cssQuestions } from '../data/data';
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
}));

export default function HTML() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Head>
        <title>CSS Interview Questions</title>
        <meta name="description" content="CSS Interview Questions" />
      </Head>
      <div className={classes.htmlRoot}>
        <Navbar heading="CSS Interview Questions" />
        <Questions data={cssQuestions} />
      </div>
    </React.Fragment>
  );
}
