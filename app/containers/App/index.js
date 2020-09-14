/**
 *
 * App
 *
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Container from '@material-ui/core/Container';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import makeSelectApp from './selectors';
import reducer from './reducer';
import saga from './saga';
import GlobalStyle from '../../global-styles';

export function App() {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <Container disableGutters>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Container>
  );
}

App.propTypes = {
  ...App,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
