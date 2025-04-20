import PurchasesReports from "@/components/PurchasesReports";
export const metadata = {
  title: {
    default: "Purchases Reports",
    template: "%s",
  },
  description: "Generate and analyze detailed purchase reports to track spending, monitor supplier performance, and optimize procurement strategies. Make informed decisions with comprehensive purchasing insights."
};

const page = () => {
  return (
    <>
      <PurchasesReports />
    </>
  );
};

export default page;
