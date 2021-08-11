import {
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { IKecamatan, IKelurahan } from '../../../interfaces/index';

interface IProps {
  index: number;
  kecamatan: IKecamatan;
}

const Row: React.FC<IProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <TableCell component='th' scope='row'>
        {props.index + 1}
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <Typography>Close</Typography>
          ) : (
            <Typography>Open</Typography>
          )}
        </div>
      </TableCell>
      <TableCell>{props.kecamatan.name}</TableCell>
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
                      <TableCell>{kelurahan.name}</TableCell>
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
