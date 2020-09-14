/**
 *
 * Options
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import messages from './messages';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 24,
    padding: 10,
  },
  media: {
    height: 140,
  },
  button: {
    backgroundColor: 'green',
  },
});

function Options() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Typography variant="h6" gutterBottom>
        <FormattedMessage {...messages.header} gutterBottom />
      </Typography>

      <Typography variant="h5" gutterBottom>
        <FormattedMessage {...messages.launchYear} gutterBottom />
      </Typography>
      <div className="d-flex flex-row align-align-items-center justify-content-between w-100 mb-5">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          2014
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          2015
        </Button>
      </div>
      <div className="d-flex flex-row align-align-items-center justify-content-between w-100 mb-5">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          2016
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          2017
        </Button>
      </div>
      <div className="d-flex flex-row align-align-items-center justify-content-between w-100 mb-5">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          2018
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          2019
        </Button>
      </div>
      <div className="d-flex flex-row align-align-items-center justify-content-between w-100 mb-5">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          2020
        </Button>
      </div>
      <Typography variant="h5" gutterBottom>
        <FormattedMessage {...messages.successfulLaunch} gutterBottom />
      </Typography>
      <div className="d-flex flex-row align-align-items-center justify-content-between w-100 mb-5">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          True
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          False
        </Button>
      </div>
      <Typography variant="h5" gutterBottom className="font-weight-bold">
        <FormattedMessage {...messages.successfulLanding} gutterBottom />
      </Typography>
      <div className="d-flex flex-row align-align-items-center justify-content-between w-100 mb-5">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          True
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          False
        </Button>
      </div>
    </Card>
  );
}

Options.propTypes = {};

export default Options;
