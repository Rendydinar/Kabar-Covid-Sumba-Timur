import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useState } from 'react';
import { IKecamatan, IKelurahan } from '../../interfaces/index';
import { getHariIni } from '../../utils/date';
import Jumbotron from '../Jumbotron';
import useStyles from './styles';
import Row from './Row';

interface IProps {
  dataPerkecamatan: {
    date: string;
    data: IKecamatan[];
  };
}

const DataCovidPerkecamatan: React.FC<IProps> = (props) => {
  const classes = useStyles();

  const [dataKecamatan, setDataKecamatan] = useState<any[]>([]);
  useEffect(() => {
    let tempDataKecamatan: IKecamatan[] = [];
    props.dataPerkecamatan.data.map((kecamatan: IKecamatan) => {
      let tempTotal: number = 0;
      kecamatan.kelurahan.map((kelurahan: IKelurahan) => {
        tempTotal += kelurahan.total;
      });
      tempDataKecamatan.push({
        ...kecamatan,
        total: tempTotal,
      });
    });
    setDataKecamatan(tempDataKecamatan);
  }, [props.dataPerkecamatan]);
  return (
    <div
      style={{
        marginTop: '40px',
      }}
    >
      <Jumbotron
        title='Data Covid Per-Kecamatan'
        description={`Update: ${getHariIni()}`}
      />
      <div className={classes.containerContent}>
        <TableContainer component={Paper}>
          <Table size='small' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                {/* <TableCell
                  style={{
                    width: '10px',
                  }}
                ></TableCell> */}
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
              {dataKecamatan.map((kecamatan: IKecamatan, index: number) => (
                <Row kecamatan={kecamatan} index={index} key={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default DataCovidPerkecamatan;
