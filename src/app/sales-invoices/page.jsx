import SalesInvoices from "@/components/SalesInvoices"
export const metadata = {
  title: {
    default: "Sales Invoices",
    template: "%s",
  },
  description: "View, manage, and generate detailed sales invoices with ease. Our intuitive system helps you track transactions, improve billing accuracy, and streamline your sales process.",
};

const page = () => {
  return (
   <>
   <SalesInvoices />
   </>
  )
}

export default page