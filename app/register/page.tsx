import RegisterForm from "../component/registerForm";

export default function RegisterUser() {

  return (
    <>
      <RegisterForm/>
    </>
  );
}

export function generateMetadata() {
  return {
    title: "Register on DriverOnHire – Sign Up to Book Verified Drivers",
    description:
      "Create your DriverOnHire account with your mobile to book police-verified drivers for local, outstation, night, or corporate travel. Quick, secure signup.",
    alternates: {
      canonical: "https://www.driveronhire.com/register/",
    },
  };
}