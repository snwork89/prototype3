import { FlightTypes } from "../types/flight";

export default function createData({
    index,
    id,
    flight,
    segement,
    date,
    time,
    day,
    week,
    priorday,
    overbook,
  }: FlightTypes) {
    return {
      index,
      id,
      flight,
      segement,
      date,
      time,
      day,
      week,
      priorday,
      overbook,
    };
  }