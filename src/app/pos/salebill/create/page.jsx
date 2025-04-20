import POS from "@/components/POS";
export const metadata = {
  title: {
    default: "POS",
    template: "%s",
  },
  description: "Streamline your sales process with our advanced Point of Sale (POS) system. Designed for efficiency, speed, and ease of use—ideal for retail, restaurants, and small businesses.",
};

const page = () => {
  return (
    <>
      <POS />
    </>
  );
};

export default page;
