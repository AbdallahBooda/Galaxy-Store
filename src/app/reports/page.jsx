import Reports from "@/components/Reports"
export const metadata = {
  title: {
    default: "Reports",
    template: "%s",
  },
  description: "Access and generate detailed reports on key business metrics. Track performance, analyze trends, and make data-driven decisions with customizable reporting tools."
};

const page = () => {
  return (
   <Reports />
  )
}

export default page