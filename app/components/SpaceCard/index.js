/* eslint-disable camelcase */
/**
 *
 * SpaceCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  heading: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 24,
  },
  title: {
    color: '#000000',
    fontWeight: 900,
    fontSize: 18,
    padding: 5,
  },
  subTitle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
  },
});

function SpaceCard({ data }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.links.mission_patch}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.heading}
          >
            {data.mission_name}
          </Typography>
          <Typography variant="body2" strong gutterBottom>
            <div className={classes.title}>Launch Year</div>{' '}
            <div className={classes.subTitle}>{data.launch_year}</div>
          </Typography>
          <Typography variant="body2" strong gutterBottom>
            <div className={classes.title}>SuccessFul Launch</div>{' '}
            <div className={classes.subTitle}>
              {data.launch_success.toString()}
            </div>
          </Typography>
          <Typography variant="body2" strong gutterBottom>
            <div className={classes.title}>SuccessFul Landing</div>{' '}
            <div className={classes.subTitle}>{data.launch_site.site_name}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

SpaceCard.propTypes = {
  data: PropTypes.object,
};

export default SpaceCard;
