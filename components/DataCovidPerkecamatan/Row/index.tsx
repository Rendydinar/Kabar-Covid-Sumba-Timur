import {
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { IKecamatan, IKelurahan } from '../../../interfaces/index';
import { classNames } from '../../../lib/classNames';
import useStyles from './styles';

interface IProps {
  index: number;
  kecamatan: IKecamatan;
}

const Row: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <TableCell component='th' scope='row' className={classes.thNo}>
        {props.index + 1}
        <IconButton
          className={classNames(classes.expand, {
            [classes.expandOpen]: open,
          })}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label='show more'
        >
          <MdExpandMore />
        </IconButton>
      </TableCell>
      <TableCell style={{ textTransform: 'capitalize' }}>
        {props.kecamatan.name.split('_').join(' ')}
      </TableCell>
      <TableCell align='right'>{props.kecamatan.total}</TableCell>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Table size='small' aria-label='a dense table'>
              <TableBody>
                {props.kecamatan.kelurahan.map(
                  (kelurahan: IKelurahan, index: number) => (
                    <TableRow key={index}>
                      <TableCell
                        style={{
                          width: '60px',
                        }}
                      ></TableCell>
                      <TableCell
                        style={{
                          textTransform: 'capitalize',
                          paddingLeft: '28px',
                        }}
                      >
                        {kelurahan.name.split('_').join(' ')}
                      </TableCell>
                      <TableCell align='right'>{kelurahan.total}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default Row;
