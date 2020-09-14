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

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';

import List from 'components/List';
import Options from 'components/Options';

import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { requestSpaceData } from './actions';

export function HomePage({ OnRequestSpaceData, homePage: { data, loading } }) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  useEffect(() => {
    OnRequestSpaceData({});
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: '100vh' }}
      >
        <CircularProgress />
      </div>
    );
  }

  function handleFilterData(filterData) {
    OnRequestSpaceData(filterData);
  }
  return (
    <div>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>

      <div className="container">
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
          spacing={10}
          style={{ padding: '24px' }}
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <Options action={handleFilterData} />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
            <List data={data} />
          </Grid>
        </Grid>
      </div>
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
