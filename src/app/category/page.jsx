import Category from "@/components/Category";
export const metadata = {
  title: {
    // absolute: "",
    default: "Category",
    template: "%s",
  },
  description: "Generated by create next app",
};
const page = () => {
  return <Category />;
};

export default page;
