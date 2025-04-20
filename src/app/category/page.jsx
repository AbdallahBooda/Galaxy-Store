import Category from "@/components/Category";
export const metadata = {
  title: {
    default: "Category",
    template: "%s",
  },
  description: "Organize and manage your product categories efficiently. Streamline navigation, improve product discoverability, and enhance user experience with well-structured category management.",
};

const page = () => {
  return <Category />;
};

export default page;
