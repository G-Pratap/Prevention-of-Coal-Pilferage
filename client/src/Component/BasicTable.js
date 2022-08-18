import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Typography } from '@mui/material';

// function createData(
//   name, calories
// ) {
//   return { name, calories };
// }

// const rows = [

// ];

export default function BasicTable({ vendorDetails, setDriverDetails, setCurrentPage }) {
  const [rows, Setrows] = React.useState([])
  React.useEffect(() => {
    Setrows(vendorDetails);
  }, [vendorDetails]);

  const handleChange = async (value) => {
    // console.log(value)
    const { data } = await axios.get('/getDriversFromVendor', {
      params: {
        vendorID: value
      },
    })
    setDriverDetails(data.drivers);
    setCurrentPage("drivers");
  }

  return (
    <TableContainer component={Paper} class="WholeContent">
      <div><Typography style={{ alignContent: 'center', padding: 10, textDecoration: 'underline' }}>Transportation Vendors</Typography></div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {rows && rows.length && Object.keys(rows[0]).map((item) => {
              return item === '_id' ? null : (<TableCell>{item}</TableCell>);
            })}
          </TableRow>
        </TableHead>
        <TableBody >
          {rows && rows.map((row) => {
            return <TableRow style={{ cursor: 'pointer' }} onClick={() => handleChange(row.vendorID)}>
              {Object.keys(row).map((item) => {
                return item === '_id' ? null : (
                  <TableCell component="th" scope="row">
                    {row[`${item}`]}
                  </TableCell>
                );
              })}
            </TableRow>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


