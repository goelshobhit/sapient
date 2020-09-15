/* eslint-disable react/prop-types */
/**
 *
 * List
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import SpaceCard from 'components/SpaceCard';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 500,
  },
}));
function List({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1} alignContent="center" justify="center">
        {data.map(item => (
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3} key={item.id}>
            <Paper className={classes.paper}>
              <SpaceCard data={item} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

List.propTypes = {};

export default List;
