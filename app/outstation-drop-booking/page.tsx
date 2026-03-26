
import { Metadata } from 'next';
import OutstationDropBookingForm from '../component/OutstationDropBookingForm';

export const metadata: Metadata = {
  title: 'Book Driver for Outstation – One-Way Drop Booking',
  description: 'Book driver for outstation one-way drops with ease. Hire professional, police-verified drivers for safe, comfortable travel to your destination at your time.',
  alternates : {
    canonical : 'https://www.driveronhire.com/outstation-drop-booking/'
  }
};

export default function BookingPage() {
  return < OutstationDropBookingForm/>; 
}
