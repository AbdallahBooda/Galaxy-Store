const DashboardCard = ({ svg, title, count }) => {
  return (
    <>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center text-center">
          {svg}

          <p className="mb-3 font-semibold text-gray-900">
            {title} : {count}
          </p>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
