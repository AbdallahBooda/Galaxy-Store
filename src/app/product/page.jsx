import Product from "@/components/Product";

export const metadata = {
  title: {
    default: "Product Management",
    template: "%s",
  },
  description:
    "Efficiently manage your product catalog with advanced tools for adding, editing, categorizing, and tracking inventory. Streamline product operations and ensure accurate listings across your platform.",
};

const page = () => {
  return (
    <>
    <Product />
    </>
  );
};

export default page;
