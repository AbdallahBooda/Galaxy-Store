import BarcodeScanner from "./BarcodeScanner";
import Billing from "./Billing";
import Payment from "./Payment";

const POS = () => {
  return (
    <>
      <div className="container mx-auto p-6 mt-24 grid grid-cols-1 md:grid-cols-2 gap-4">
        <BarcodeScanner />
        <Billing />
        <Payment />
      </div>
    </>
  );
};

export default POS;
