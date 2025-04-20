import CreateProduct from "@/components/CreateProduct";
export const metadata = {
  title: {
    default: "Create Product",
    template: "%s",
  },
  description: "Easily add new products to your inventory with our streamlined creation form. Input product details, pricing, images, and categories to expand and manage your catalog efficiently.",
};

const page = () => {
  return (
    <>
      <CreateProduct />
    </>
  );
};

export default page;
