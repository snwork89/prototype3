import React , {Dispatch, SetStateAction,useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import OverBookingTab from './OverBookingTab';
import Dialog from '@mui/material/Dialog';

import {overBooking} from '../../types/overbooking';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


interface OverBookingProps {
    isPopUpOpen:boolean,
    setIsPopUpOpen: Dispatch<SetStateAction<boolean>>,
    selectedFlightOverBooking: overBooking[] | [],
    setSelectedFlightOverBooking: Dispatch<SetStateAction<overBooking[] | []>>,

}

export default function OverBookingPopup (props: OverBookingProps) {

    const [currentTab, setcurrentTab] = useState<Number>(0);

    const handleClose = ()=>{
        props.setIsPopUpOpen(false);
    }

    const handleCurrentTabChange =  (event: React.SyntheticEvent, newValue: number) => {
        setcurrentTab(newValue);
      };

    const renderTabContent = ()=>{
        if(currentTab==0){
           return (
               <OverBookingTab selectedFlightOverBooking={props.selectedFlightOverBooking}
               setSelectedFlightOverBooking={props.setSelectedFlightOverBooking}
               
               />
           )
        }
    }
  return (
    <Dialog open={props.isPopUpOpen} onClose={handleClose} fullWidth maxWidth="lg">
      <DialogTitle style={{color:"#1976d2",backgroundColor:"#d8ebed"}}>
        Current Selection
      </DialogTitle>
        
  
        <DialogContent style={{overflow:"hidden"}}>
     <Tabs value={currentTab} onChange={handleCurrentTabChange}>
         <Tab label="OverBooking" />
        


         
     </Tabs>
     {renderTabContent()}
 </DialogContent>
    </Dialog>
  );
}
