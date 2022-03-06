import Grid from '@mui/material/Grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PushPinIcon from '@mui/icons-material/PushPin';
import { overBooking } from "../../types/overbooking";
import OverBookingDataJson from "../../data/overbooking.json";
import createOverBookingData from "../../utils/createOverBookingData";
import React, { Dispatch, SetStateAction } from 'react';

export interface OverBookingProps {
  isPopUpOpen: boolean,
  setIsPopUpOpen: Dispatch<SetStateAction<boolean>>,
  selectedFlightOverBooking: overBooking[] | [],
  setSelectedFlightOverBooking: Dispatch<SetStateAction<overBooking[] | []>>,
  id: Number

}

const TableActions = (props: OverBookingProps) => {

  let overBookingData: overBooking[] = [];
  OverBookingDataJson.forEach((flight: overBooking) => {
    overBookingData.push(createOverBookingData(flight));
  });
  const handleOnClick = () => {
    let filteredBookingdata = overBookingData && Array.isArray(overBookingData) && overBookingData.filter((x: overBooking) => x.flightId == props.id);
    props.setIsPopUpOpen(true);
    props.setSelectedFlightOverBooking(filteredBookingdata ? [...filteredBookingdata] : []);
    

  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <VisibilityIcon onClick={handleOnClick} />
      </Grid>
      <Grid item xs={6}>
        <PushPinIcon onClick={handleOnClick}/>
      </Grid>

    </Grid>

  )
}


export default TableActions;