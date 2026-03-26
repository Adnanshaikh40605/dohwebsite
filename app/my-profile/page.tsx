import { Metadata } from 'next';
import MyProfile from '../component/MyProfile';

export const metadata: Metadata = {
  title: 'My Profile – DriverOnHire Account Details',
  description:
    'Access your DriverOnHire profile to view and update your personal details and contact information. Ensure your account is accurate for smooth driver bookings.',
  alternates: {
    canonical: 'https://www.driveronhire.com/my-profile/',
  },
};

export default function BookingPage() {
  return <MyProfile />;
}
