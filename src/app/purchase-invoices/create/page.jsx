import PurchaseInvoicesCreate from "@/components/PurchaseInvoicesCreate";
export const metadata = {
  title: {
    default: "Create Purchase Invoice",
    template: "%s",
  },
  description: "Easily create and record new purchase invoices for your business. Input vendor details, itemized purchases, and payment terms to keep your procurement process organized and efficient.",
};

const page = () => {
  return (
    <>
      <PurchaseInvoicesCreate />
    </>
  );
};

export default page;
