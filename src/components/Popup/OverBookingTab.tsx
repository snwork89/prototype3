import { useState } from 'react';
import Grid from '@mui/material/Grid';
import NewStratergyTable from './NewStratergyTable';
import OverBookingList from './OverBookingList';
import { overBooking } from '../../types/overbooking';
import { strategies } from '../../types/strategies';
import { FlightTypes } from '../../types/flight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FlightData from "../../data/flightes.json";
import createFlightData from "../../utils/createFlightData";
import { Dispatch, SetStateAction } from 'react';
import OverBookingDataJson from "../../data/overbooking.json";
import createOverBookingData from "../../utils/createOverBookingData";


interface overBookingTabProps {
  selectedFlightOverBooking: overBooking[] | [],
  setSelectedFlightOverBooking: Dispatch<SetStateAction<overBooking[] | []>>,
}


export default function OverBookingTab(props: overBookingTabProps) {

  const [selectedStratergy, setSelectedStratergy] = useState<strategies | undefined>(undefined);

  let flightData: FlightTypes[] = [];
  let overBookingData: overBooking[] = [];
  OverBookingDataJson.forEach((flight: overBooking) => {
    overBookingData.push(createOverBookingData(flight));
  });
  FlightData.forEach((flight: FlightTypes) => {
    flightData.push(createFlightData(flight));
  });
  let currentFlightId = props.selectedFlightOverBooking && props.selectedFlightOverBooking[0] && props.selectedFlightOverBooking[0].flightId;
  const handleFlightChange = (flightOrder: string) => {
        let currentFlightIndex = flightData.findIndex(x => x.flight == currentFlightId);
      currentFlightIndex = currentFlightId?currentFlightIndex:currentFlightIndex+1;
      if (flightOrder == "next" ) {
        let orderDataIndex = (currentFlightIndex + 1 == flightData.length) ? 0 : (currentFlightIndex + 1);
        let filteredBookingdata = overBookingData && Array.isArray(overBookingData) && overBookingData.filter((x: overBooking) => x.flightId == flightData[orderDataIndex].flight);

        props.setSelectedFlightOverBooking(filteredBookingdata ? [...filteredBookingdata] : []);

      }
      else if (flightOrder == "previous") {
        let orderDataIndex = (currentFlightIndex == 0) ? (flightData.length - 1):(currentFlightIndex-1) ;
        let filteredBookingdata = overBookingData && Array.isArray(overBookingData) && overBookingData.filter((x: overBooking) => x.flightId == flightData[orderDataIndex].flight);
        props.setSelectedFlightOverBooking(filteredBookingdata ? [...filteredBookingdata] : []);
      }
    

  }
  return (
    <Grid container spacing={2} overflow="hidden">
      <Grid item xs={5}>
        <OverBookingList selectedFlightOverBooking={props.selectedFlightOverBooking} setSelectedStratergy={setSelectedStratergy} selectedStratergy={selectedStratergy} />

      </Grid>
      <Grid item xs={7}>
        <div>{selectedStratergy && selectedStratergy.name}{currentFlightId}
          <ChevronLeftIcon onClick={() => handleFlightChange("previous")} />

          <ChevronRightIcon onClick={() => handleFlightChange("next")} /></div>



        <NewStratergyTable />
      </Grid>

    </Grid>
  )
}