import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable1({ vehicleDetails }) {
  return (
    <TableContainer component={Paper}>
      <Typography style={{textDecoration: 'underline', paddingTop: '3px'}}>Alloted Vehicle's Detail</Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table"  style={{marginTop: '30px'}}>
        <TableHead>
          <TableRow>
            {vehicleDetails && vehicleDetails.length && Object.keys(vehicleDetails[0]).map((item) => {
              return item === '_id' ? null : (<TableCell>{item}</TableCell>);
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicleDetails && vehicleDetails.length && vehicleDetails.map((item) => {
            return <TableRow>
              {Object.keys(item).map((data) => {
                return data === "_id" ? null : (<TableCell> {item[`${data}`]} </TableCell>);
              })}
            </TableRow>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
