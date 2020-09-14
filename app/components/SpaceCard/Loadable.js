/**
 *
 * Asynchronously loads the component for SpaceCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
