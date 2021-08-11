import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { IKelurahan } from '../../interfaces';
import useStyles from './styles';

interface IProps {
  top10Kelurahan: IKelurahan[];
}

const Top10Kecamatan: React.FC<IProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        style={{
          fontSize: '20px',
          fontWeight: 700,
          color: '#e44933',
          textAlign: 'center',
        }}
      >
        Top 10 Kelurahan Dengan Kasus Terbanyak
      </Typography>
      <TableContainer>
        <Table size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  width: '10px',
                }}
                className={classes.rowTitle}
              >
                No
              </TableCell>
              <TableCell className={classes.rowTitle}>Kelurahan</TableCell>
              <TableCell className={classes.rowTitle} align='right'>
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.top10Kelurahan.map(
              (kelurahan: IKelurahan, index: number) => (
                <TableRow key={1}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{kelurahan.name}</TableCell>
                  <TableCell
                    align='right'
                    style={{
                      color: '#e44933',
                      fontWeight: 'bold',
                    }}
                  >
                    {kelurahan.total}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Top10Kecamatan;
