import DashBoard from "@/components/DashBoard";

export const metadata = {
  title: {
    default: "Dashboard",
    template: "%s",
  },
  description:
    "Access your centralized dashboard to monitor key metrics, manage data, and gain insights into business performance—all in one intuitive interface.",
};

const Dashboard = () => {
  return (
    <>
      <DashBoard />
    </>
  );
};

export default Dashboard;
