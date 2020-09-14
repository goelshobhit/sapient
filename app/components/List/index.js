/* eslint-disable react/prop-types */
/**
 *
 * List
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import SpaceCard from 'components/SpaceCard';

function List({ data }) {
  return (
    <Grid container spacing={3} style={{ padding: '24px' }}>
      {data.map(item => (
        <Grid key={item.flight_number} item xs={12} sm={6} md={4} lg={4} xl={4}>
          <SpaceCard data={item} data-aos="flip-down" />
        </Grid>
      ))}
    </Grid>
  );
}

List.propTypes = {};

export default List;
