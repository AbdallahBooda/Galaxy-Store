import DashBoard from "@/components/DashBoard";

export const metadata = {
  title: {
    // absolute: "",
    default: "Dashboard",
    template: "%s",
  },
  description: "Generated by create next app",
};

const Dashboard = () => {
  return (
    <>
      <DashBoard />
    </>
  );
};

export default Dashboard;
