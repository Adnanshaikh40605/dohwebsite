
import { Metadata } from 'next';
import PuneBookingForm from '../component/PuneBookingForm'

export const metadata: Metadata = {
  title: 'Book Driver in Pune – Start Your Booking Online Now',
  description: 'Book Driver Pune for local, night, or corporate travel. Start your booking online and hire trusted, police-verified drivers. Quick, safe, and reliable service',
  alternates : {
    canonical : 'https://www.driveronhire.com/booking-pune/'
  }
};

export default function BookingPage() {
  return <PuneBookingForm />; 
}
