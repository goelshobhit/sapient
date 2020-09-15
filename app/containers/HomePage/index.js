/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/**
 *
 * HomePage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { isEmpty } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { LinearProgress } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import List from 'components/List';
import Options from 'components/Options';

import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { requestSpaceData } from './actions';

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#d5d5d5',
    color: '#000000',
    width: '99%',
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function HomePage({ OnRequestSpaceData, homePage: { data, loading } }) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });
  const classes = useStyles();
  useEffect(() => {
    OnRequestSpaceData({ launchSuccess: '', landSuccess: '', launchYear: '' });
  }, []);

  function handleFilterData(filterData) {
    OnRequestSpaceData(filterData);
  }
  return (
    <div>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      {loading ? (
        <div style={{ position: 'absolute', top: 0, width: '100%' }}>
          <LinearProgress />
        </div>
      ) : null}
      <div style={{ padding: '50px 0' }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          strong="true"
          data-aos="fade-up"
        >
          <FormattedMessage {...messages.header} />
        </Typography>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Options action={handleFilterData} />
          {isEmpty(data) ? (
            <Grid item lg={8} xl={8}>
              <Alert severity="info">No Data Found!</Alert>
            </Grid>
          ) : (
            <Grid item lg={8} xl={8}>
              <List data={data} />
            </Grid>
          )}
        </Grid>
      </div>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography variant="body1" className="bold">
            Developed by: Shobhit Goel
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

HomePage.propTypes = {
  OnRequestSpaceData: PropTypes.func,
  homePage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    OnRequestSpaceData: params => dispatch(requestSpaceData(params)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
