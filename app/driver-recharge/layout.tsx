import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Driver Recharge Plans - Driver on Hire',
  description: 'Choose the perfect plan to boost your earnings. Instant activation & secure payments guaranteed.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DriverRechargeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
