
import { Metadata } from 'next';
import DriversJob from '../component/DriversJob';

export const metadata: Metadata = {
  title: '50+ Driver Vacancies in Mumbai, Pune, Thane & Navi Mumbai',
  description: 'Hiring drivers in Mumbai, Pune, Thane & Navi Mumbai. Join now for full-time or part-time driving jobs with trusted clients. 50+ openings available. Apply today!',
  alternates : {
    canonical : 'https://www.driveronhire.com/drivers-job/'
  }
};

export default function BookingPage() {
  return <DriversJob />; 
}
