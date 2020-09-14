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
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: 10,
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
    padding: 10,
  },
  title: {
    color: '#000000',
    fontWeight: 900,
    fontSize: 18,
    padding: 10,
  },
  subTitle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
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
      <Card className={classes.root}>
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
          data-aos="flip-right"
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
        <Typography
          variant="body2"
          gutterBottom
          component="div"
          data-aos="flip-right"
        >
          <div className={classes.title}>SuccessFul Launch</div>{' '}
          <div className={classes.subTitle}>
            {data.launch_success.toString()}
          </div>
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
      </Card>
    </Link>
  );
}

SpaceCard.propTypes = {
  data: PropTypes.object,
};

export default SpaceCard;
