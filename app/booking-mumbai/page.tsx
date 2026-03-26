
import { Metadata } from 'next';
import MumbaiBookingForm from '../component/MumbaiBookingForm'

export const metadata: Metadata = {
  title: 'Book Driver in Mumbai – Safe & Easy Online Booking',
  description: 'Book driver Mumbai online for local or outstation travel. Hire trusted, police-verified drivers in minutes. Quick, safe, and hassle-free booking experience.',
  alternates : {
    canonical : 'https://www.driveronhire.com/booking-mumbai/'
  }
};

export default function BookingPage() {
  return <MumbaiBookingForm />; 
}
