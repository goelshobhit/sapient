/**
 *
 * Options
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Options() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Options.propTypes = {};

export default Options;
