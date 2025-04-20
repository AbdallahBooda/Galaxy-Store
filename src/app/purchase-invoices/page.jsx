import PurchaseInvoices from "@/components/PurchaseInvoices";
export const metadata = {
  title: {
    default: "Purchase Invoices",
    template: "%s",
  },
  description: "Manage and track all your purchase invoices in one place. Streamline procurement workflows, monitor vendor payments, and maintain accurate financial records with ease.",
};


const page = () => {
  return <PurchaseInvoices />;
};

export default page;
