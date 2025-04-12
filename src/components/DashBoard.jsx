import CardList from "./CardList";

const DashBoard = () => {
  return (
    <>
      <h1 className="m-6 mt-24 font-bold text-2xl">لوحة التحكم </h1>

      <div className="block max-w p-6 m-6 bg-white border border-gray-200 rounded-lg shadow-2xl">
        <h1 className="m-6 font-bold">احصائيات عامة</h1>
       <CardList />
      </div>
    </>
  );
};

export default DashBoard;
