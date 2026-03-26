
import { Metadata } from 'next';
import OtpLogin from '../component/OtpLogin'

export const metadata: Metadata = {
  title: 'DriverOnHire Login – Sign in with OTP to Hire a Driver',
  description: 'Login to DriverOnHire with your mobile number to book police-verified drivers for local, outstation, night, temporary, or corporate travel. Simple, fast, secure',
  alternates : {
    canonical : 'https://www.driveronhire.com/otp-login/'
  }
};

export default function BookingPage() {
  return <OtpLogin />; 
}
