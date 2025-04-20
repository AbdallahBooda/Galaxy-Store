import SalesReports from "@/components/SalesReports"
export const metadata = {
  title: {
    default: "Sales Reports",
    template: "%s",
  },
  description: "Generate detailed sales reports to analyze revenue, track performance, and monitor sales trends. Make data-driven decisions to optimize your sales strategy and growth."
};

const page = () => {
  return (
    <SalesReports />
  )
}

export default page