import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React, { ReactNode } from 'react';
import useStyles from './style';
import { comparasionData } from '../../utils/index';
import Badge from '../Badge';
import { classNames } from '../../lib/classNames';

interface IProps {
  icon?: ReactNode | any;
  title: string;
  totalNow: number;
  totalYesterday: number;
  dateYesterday: string;
  description: string;
}

const CardDataCovid: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='140'
          className={classes.media}
          image='https://image.shutterstock.com/image-vector/vector-cartoon-stick-figure-drawing-260nw-1674063109.jpg'
          title='Contemplative Reptile'
        />
        <CardContent>
          <div className={classes.containerTotal}>
            <Typography variant='h6' component='h2'>
              {props.title}
            </Typography>
            <div
              className={classNames('radial-repeating', 'border-card-custom')}
            >
              <Typography className={classes.cardInfo}>
                <span className={classes.cardTotalKasus}>{props.totalNow}</span>
                Orang
              </Typography>
              <Badge
                total={comparasionData(props.totalNow, props.totalYesterday)}
              ></Badge>
            </div>
          </div>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default CardDataCovid;
