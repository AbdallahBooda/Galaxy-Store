import Suppliers from "@/components/Suppliers"
export const metadata = {
  title: {
    default: "Suppliers",
    template: "%s",
  },
  description: "Manage and organize supplier information in one centralized dashboard. Track contacts, purchase history, and performance to strengthen your vendor relationships and procurement efficiency.",
};


const page = () => {
  return (
    <Suppliers />
  )
}

export default page