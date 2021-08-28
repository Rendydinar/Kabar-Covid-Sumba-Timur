import { Link, Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import { IMediaPathner } from '../../interfaces';
import { shimmer, toBase64 } from '../../utils';
import useStyles from './styles';

interface IProps {
  pathner: IMediaPathner;
}

const CardMediaPathner: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href={props.pathner.website} target='_blank' rel='noopener'>
        <div className='img-wrapper'>
          <Image
            priority
            src={props.pathner.image}
            alt={props.pathner.name}
            height={150}
            width={150}
            objectFit='contain'
            objectPosition='center'
            className={classes.image}
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 700)
            )}`}
          />
          {/* <Typography className={classes.title}>{props.pathner.name}</Typography> */}
        </div>
      </Link>
    </div>
  );
};

export default CardMediaPathner;
