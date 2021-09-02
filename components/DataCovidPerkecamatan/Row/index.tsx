import {
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { findIndex } from 'lodash';
import React, { Fragment, useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { IKecamatan, IKelurahan } from '../../../interfaces/index';
import { classNames } from '../../../lib/classNames';
import { comparasionData } from '../../../utils';
import Badge from '../../Badge';
import useStyles from './styles';

interface IProps {
  index: number;
  kecamatan: IKecamatan;
  dataKecamatanYesterday: IKecamatan[];
  dataPerKelurahanYesterday: IKelurahan[];
}

const Row: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const findTotalKecamatanComparasion = (
    kecamatanName: string,
    total: number
  ): number => {
    const indexKecamatanYesterday = findIndex(props.dataKecamatanYesterday, {
      name: kecamatanName,
    });
    if (indexKecamatanYesterday != -1) {
      const kecamatanYesterday =
        props.dataKecamatanYesterday[indexKecamatanYesterday];
      const difference = comparasionData(total, kecamatanYesterday.total ?? 0);
      return difference;
    } else {
      return 0;
    }
  };

  const findTotalKelurahanComparasion = (
    kelurahanName: string,
    total: number
  ): number => {
    const indexKelurahanYesterday = findIndex(props.dataPerKelurahanYesterday, {
      name: kelurahanName,
    });
    if (indexKelurahanYesterday != -1) {
      const kelurahanYesterday =
        props.dataPerKelurahanYesterday[indexKelurahanYesterday];
      const difference = comparasionData(total, kelurahanYesterday.total ?? 0);
      return difference;
    } else {
      return 0;
    }
  };

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
      <TableCell
        style={{
          textTransform: 'capitalize',
          fontSize: '16px',
          fontWeight: 600,
        }}
      >
        {props.kecamatan.name.split('_').join(' ')}
      </TableCell>
      <TableCell
        align='right'
        style={{
          fontSize: '16px',
          fontWeight: 800,
          position: 'relative',
        }}
      >
        {props.kecamatan.total}
        <Badge
          total={findTotalKecamatanComparasion(
            props.kecamatan.name,
            props.kecamatan.total ?? 0
          )}
          className={classes.badge}
        ></Badge>
      </TableCell>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Table size='small' aria-label='a dense table'>
              <TableBody>
                {props.kecamatan.kelurahan.map(
                  (kelurahan: IKelurahan, index: number) =>
                    kelurahan.isShow && (
                      <TableRow key={index}>
                        <TableCell
                          style={{
                            width: '60px',
                          }}
                        ></TableCell>
                        <TableCell
                          style={{
                            textTransform: 'capitalize',
                            padding: '0px',
                            fontSize: '15px',
                          }}
                        >
                          {kelurahan.name.split('_').join(' ')}
                          <span
                            style={{
                              marginLeft: '5px',
                              fontWeight: 300,
                              fontSize: '14px',
                            }}
                          >
                            {kelurahan.isDesa ? '(Desa)' : '(Kelurahan)'}
                          </span>
                        </TableCell>
                        <TableCell
                          align='right'
                          style={{ position: 'relative' }}
                        >
                          {kelurahan.total}
                          <Badge
                            total={findTotalKelurahanComparasion(
                              kelurahan.name,
                              kelurahan.total
                            )}
                            className={classes.badge}
                          ></Badge>
                        </TableCell>
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
