/**
 *
 * Options
 *
 */

import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    marginTop: 24,
    padding: 10,
  },
  media: {
    height: 140,
  },
  button: {
    backgroundColor: '#1B5E20',
    margin: theme.spacing(2),
  },
  selectedbutton: {
    backgroundColor: '#00C853',
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Options({ action }) {
  const classes = useStyles();
  const [year, setYear] = useState(0);
  const [launch, setLaunch] = useState('');
  const [landing, setLanding] = useState('');

  useEffect(() => {
    action({ launchSuccess: launch, landSuccess: landing, launchYear: year });
  }, [year, launch, landing]);
  return (
    <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
      <Paper className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          <FormattedMessage {...messages.header} gutterBottom />
        </Typography>

        <Typography variant="h5" gutterBottom>
          <FormattedMessage {...messages.launchYear} gutterBottom />
        </Typography>
        <div
          className="d-flex flex-row align-align-items-center justify-content-center w-100 mb-1"
          data-aos="zoom-in-down"
        >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2003 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2003)}
          >
            2003
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2004 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2004)}
          >
            2004
          </Button>
        </div>
        <div
          className="d-flex flex-row align-align-items-center justify-content-center w-100 mb-1"
          data-aos="zoom-in-down"
        >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2005 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2005)}
          >
            2005
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2006 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2006)}
          >
            2006
          </Button>
        </div>
        <div
          className="d-flex flex-row align-align-items-center justify-content-center w-100 mb-1"
          data-aos="zoom-in-down"
        >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2007 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2007)}
          >
            2007
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2008 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2008)}
          >
            2008
          </Button>
        </div>
        <div
          className="d-flex flex-row align-align-items-center justify-content-center w-100 mb-1"
          data-aos="zoom-in-down"
        >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2009 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2009)}
          >
            2009
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2010 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2010)}
          >
            2010
          </Button>
        </div>
        <div
          className="d-flex flex-row align-align-items-center justify-content-center w-100 mb-1"
          data-aos="zoom-in-down"
        >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2011 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2011)}
          >
            2011
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2012 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2012)}
          >
            2012
          </Button>
        </div>
        <div
          className="d-flex flex-row align-align-items-center justify-content-center w-100 mb-1"
          data-aos="zoom-in-down"
        >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2013 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2013)}
          >
            2013
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2014 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2014)}
          >
            2014
          </Button>
        </div>
        <div
          className="d-flex flex-row align-align-items-center justify-content-center w-100 mb-1"
          data-aos="zoom-in-down"
        >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2015 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2015)}
          >
            2015
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2016 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2016)}
          >
            2016
          </Button>
        </div>
        <div
          className="d-flex flex-row align-align-items-center justify-content-center w-100 mb-1"
          data-aos="zoom-in-down"
        >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2017 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2017)}
          >
            2017
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2018 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2018)}
          >
            2018
          </Button>
        </div>
        <div
          className="d-flex flex-row align-align-items-center justify-content-center w-100 mb-1"
          data-aos="zoom-in-down"
        >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2019 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2019)}
          >
            2019
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={year === 2020 ? classes.selectedbutton : classes.button}
            onClick={() => setYear(2020)}
          >
            2020
          </Button>
        </div>
        <Typography variant="h5" gutterBottom>
          <FormattedMessage {...messages.successfulLaunch} gutterBottom />
        </Typography>
        <div
          className="d-flex flex-row align-align-items-center justify-content-center w-100 mb-1"
          data-aos="zoom-in-down"
        >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={
              launch === true ? classes.selectedbutton : classes.button
            }
            onClick={() => setLaunch(true)}
          >
            True
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={
              launch === false ? classes.selectedbutton : classes.button
            }
            onClick={() => setLaunch(false)}
          >
            False
          </Button>
        </div>
        <Typography variant="h5" gutterBottom className="font-weight-bold">
          <FormattedMessage {...messages.successfulLanding} gutterBottom />
        </Typography>
        <div
          className="d-flex flex-row align-align-items-center justify-content-center w-100 mb-1"
          data-aos="zoom-in-down"
        >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={
              landing === true ? classes.selectedbutton : classes.button
            }
            onClick={() => setLanding(true)}
          >
            True
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={
              landing === false ? classes.selectedbutton : classes.button
            }
            onClick={() => setLanding(false)}
          >
            False
          </Button>
        </div>
        <div
          className="d-flex flex-row align-align-items-center justify-content-center w-100 mb-1"
          data-aos="zoom-in-down"
        >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => {
              setLaunch('');
              setLanding('');
              setYear('');
            }}
          >
            Reset
          </Button>
        </div>
      </Paper>
    </Grid>
  );
}

Options.propTypes = {
  ...Options,
};

export default Options;
