import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useState } from 'react';
import { IKecamatan, IKelurahan } from '../../interfaces/index';
import Jumbotron from '../Jumbotron';
import Row from './Row';
import useStyles from './styles';
import sortBy from 'lodash/sortBy';

interface IProps {
  dataPerkecamatan: {
    date: string;
    data: IKecamatan[];
  };
  dataPerkecamatanYesterday: {
    date: string;
    data: IKecamatan[];
  };
  dataPerKelurahanYesterday: IKelurahan[];
}

const DataCovidPerkecamatan: React.FC<IProps> = (props) => {
  const classes = useStyles();

  const [dataKecamatan, setDataKecamatan] = useState<IKecamatan[]>([]);
  const [dataKecamatanYesterday, setDataKecamatanYesterday] = useState<
    IKecamatan[]
  >([]);
  useEffect(() => {
    let tempDataKecamatan: IKecamatan[] = [];
    props.dataPerkecamatan.data.map((kecamatan: IKecamatan) => {
      if (kecamatan.isShow) {
        let tempTotal: number = 0;
        kecamatan.kelurahan.map((kelurahan: IKelurahan) => {
          tempTotal += kelurahan.isShow ? kelurahan.total : 0;
        });
        tempDataKecamatan.push({
          ...kecamatan,
          total: tempTotal,
        });
      }
    });
    tempDataKecamatan = sortBy(tempDataKecamatan, 'total').reverse();
    setDataKecamatan(tempDataKecamatan);

    let tempDataKecamatanYesterday: IKecamatan[] = [];
    props.dataPerkecamatanYesterday.data.map((kecamatan: IKecamatan) => {
      if (kecamatan.isShow) {
        let tempTotal: number = 0;
        kecamatan.kelurahan.map((kelurahan: IKelurahan) => {
          tempTotal += kelurahan.isShow ? kelurahan.total : 0;
        });
        tempDataKecamatanYesterday.push({
          ...kecamatan,
          total: tempTotal,
        });
      }
    });
    setDataKecamatanYesterday(tempDataKecamatanYesterday);
  }, [props.dataPerkecamatan]);
  return (
    <div
      style={{
        marginTop: '40px',
      }}
    >
      <Jumbotron
        title='Data Covid Per-Kecamatan'
        description={`Update: ${props.dataPerkecamatan.date}`}
      />
      <div className={classes.containerContent}>
        <TableContainer component={Paper}>
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
                <TableCell className={classes.rowTitle} align='left'>
                  Kecamatan
                </TableCell>
                <TableCell className={classes.rowTitle} align='right'>
                  Total
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataKecamatan.map(
                (kecamatan: IKecamatan, index: number) =>
                  kecamatan.isShow && (
                    <Row
                      kecamatan={kecamatan}
                      dataKecamatanYesterday={dataKecamatanYesterday}
                      dataPerKelurahanYesterday={
                        props.dataPerKelurahanYesterday
                      }
                      index={index}
                      key={index}
                    />
                  )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default DataCovidPerkecamatan;
