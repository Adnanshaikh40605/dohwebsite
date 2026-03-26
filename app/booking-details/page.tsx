import { Metadata } from 'next';
import BookingDetails from '../component/BookingDetails';

export const metadata: Metadata = {
  title: 'Booking Details – View and Manage Bookings',
  description:
    'Check your booking details, including driver information, travel schedule, and status. Stay updated and manage your bookings easily and securely in one place.',
  alternates: {
    canonical: 'https://www.driveronhire.com/booking-details/',
  },
};

export default function BookingPage() {
  return <BookingDetails />;
}
