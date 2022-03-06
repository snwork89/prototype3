import React, { useState } from "react";
import { FlightTypes } from "../../types/flight";
import { overBooking } from "../../types/overbooking";
import FlightData from "../../data/flightes.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import OverBookingPopup from "../Popup/OverBookingPopup";
import createFlightData from "../../utils/createFlightData";
import ActionTable from "./TableActions";

const FlightTable = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);
  const [selectedFlightOverBooking, setSelectedFlightOverBooking] = useState<
    overBooking[] | []
  >([]);
  

  let rows: FlightTypes[] = [];

  FlightData.forEach((flight: FlightTypes) => {
    rows.push(createFlightData(flight));
  });

  return (
    <>
      <TableContainer sx={{ maxHeight: 550 }} component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" width="10%">
                id
              </TableCell>
              <TableCell align="center" width="10%">
                flight
              </TableCell>
              <TableCell align="center" width="10%">
                segement
              </TableCell>
              <TableCell align="center" width="10%">
                date
              </TableCell>
              <TableCell align="center" width="10%">
                time
              </TableCell>
              <TableCell align="center" width="5%">
                Action
              </TableCell>
              <TableCell align="center" width="10%">
                day
              </TableCell>
              <TableCell align="center" width="10%">
                week
              </TableCell>
              <TableCell align="center" width="10%">
                priorday
              </TableCell>
              <TableCell align="center" width="10%">
                overbook
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.index}>
                <TableCell component="th" scope="row" align="center">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.flight}</TableCell>
                <TableCell align="center">{row.segement}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.time}</TableCell>
                <TableCell align="center">
                  {
                    <ActionTable
                      isPopUpOpen={isPopUpOpen}
                      setIsPopUpOpen={setIsPopUpOpen}
                      selectedFlightOverBooking={selectedFlightOverBooking}
                      setSelectedFlightOverBooking={setSelectedFlightOverBooking}
                      id={row.flight}
                    />
                  }
                </TableCell>
                <TableCell align="center">{row.day}</TableCell>
                <TableCell align="center">{row.week}</TableCell>
                <TableCell align="center">{row.priorday}</TableCell>
                <TableCell align="center">{row.overbook}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <OverBookingPopup
        isPopUpOpen={isPopUpOpen}
        setIsPopUpOpen={setIsPopUpOpen}
        selectedFlightOverBooking={selectedFlightOverBooking}
      />
    </>
  );
};

export default FlightTable;
