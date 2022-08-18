import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Table, TableBody, TableHead } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({ driverDetail, setCurrentPage, setVehicleDetails }) {
  console.log(driverDetail)
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChange1 = async (value) => {
    const { data } = await axios.get('/getVehicleFromDriver', {
      params: {
        associatedVehicleID: value
      },
    })
    setCurrentPage("vehicles");
    setVehicleDetails(data.vehicles);
  }

  return (
    <div>
      {driverDetail && driverDetail.length && driverDetail.map((item) => (
        <Accordion expanded={expanded === item.driver._id} onChange={handleChange(item.driver._id)}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>{item.driver.driverName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Driver Details</Typography>
            {
              Object.keys(item.driver).map((key) =>
                key === 'associatedVehicleID' ?
                  <span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handleChange1(item.driver.associatedVehicleID)}>
                    <Typography>{key}: {item.driver[`${key}`]}</Typography>
                  </span> :
                  <Typography>{key}: {item.driver[`${key}`]}</Typography>)
            }
            {/* <Typography>Vehicle Details</Typography> */}
            {/* {
              Object.keys(item.vehicle).map((key) => <Typography>{key}: {item.vehicle[`${key}`]}</Typography>)
            } */}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
