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

import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';

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
      <div className="d-flex flex-column align-items-center justify-content-between w-100 h-100">
        {new Array(5).map(value => {
          <div key={value}>
            <Skeleton variant="text" />
            <Skeleton variant="circle" width={40} height={40} />
            <Skeleton variant="rect" width={210} height={118} />
          </div>;
        })}
      </div>
    );
  }

  return (
    <div>
      <style jsx="true">{`
        .container {
          padding-top: 30px;
        }
      `}</style>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>

      <div className="container">
        <Typography variant="h3" component="h1" gutterBottom strong="true">
          <FormattedMessage {...messages.header} />
        </Typography>
        <div className="d-flex flex-row align-items-center justify-content-between w-100">
          <div>Options</div>
          <div>Gmail</div>
        </div>
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
