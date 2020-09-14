/*
 * Options Messages
 *
 * This contains all the text for the Options component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Options';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'filter',
  },
  launchYear: {
    id: `${scope}.launchYear`,
    defaultMessage: 'Launch Year',
  },
  successfulLaunch: {
    id: `${scope}.successfulLaunch`,
    defaultMessage: 'Successful launch',
  },
  successfulLanding: {
    id: `${scope}.successfulLanding`,
    defaultMessage: 'Successful landing',
  },
});
