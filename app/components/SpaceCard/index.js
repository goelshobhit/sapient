/* eslint-disable camelcase */
/**
 *
 * SpaceCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { last, isEmpty } from 'lodash';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: 10,
    width: '10vw',
  },
  media: {
    height: 206,
    backgroundColor: '#d5d5d5',
    paddingBottom: 12,
  },
  heading: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 24,
    padding: 5,
    textAlign: 'start',
  },
  title: {
    color: '#000000',
    fontWeight: 900,
    fontSize: 18,
    padding: 5,
    textAlign: 'start',
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
  const {
    links: { flickr_images, mission_patch_small, video_link },
  } = data;
  function renderImage() {
    if (!isEmpty(flickr_images)) {
      return last(flickr_images);
    }
    return mission_patch_small;
  }

  return (
    <Link href={video_link}>
      <CardMedia
        component="img"
        className={classes.media}
        src={renderImage()}
        title={data.mission_name}
      />
      <Typography
        gutterBottom
        variant="h5"
        className={classes.heading}
        component="p"
      >
        {data.mission_name}
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        component="div"
        data-aos="flip-right"
      >
        <div className={classes.title}>Launch Year</div>{' '}
        <div className={classes.subTitle}>{data.launch_year}</div>
      </Typography>
      <Typography variant="body2" gutterBottom component="div">
        <div className={classes.title}>SuccessFul Launch</div>{' '}
        <div className={classes.subTitle}>{data.launch_success.toString()}</div>
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        component="div"
        data-aos="flip-right"
      >
        <div className={classes.title}>SuccessFul Landing</div>{' '}
        <div className={classes.subTitle}>{data.launch_site.site_name}</div>
      </Typography>
    </Link>
  );
}

SpaceCard.propTypes = {
  data: PropTypes.object,
};

export default SpaceCard;
