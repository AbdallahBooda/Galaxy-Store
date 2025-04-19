import Link from "next/link";
import Pagination from "./Pagination";
import Search from "./Search";

const SalesReports = () => {
  return (
    <>
      <h1 className="m-6 mt-24 font-semibold text-lg text-gray-900">
        تصنيف الموظفين{" "}
      </h1>
      <div className="block max-w p-6 m-6 bg-white border border-gray-200 rounded-lg shadow-2xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
          <form className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
            <div
              id="date-range-picker"
              data-rangepicker
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4"
            >
              <div className="relative w-full sm:w-auto">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  id="datepicker-range-start"
                  name="start"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-32 ps-10 p-2.5"
                  placeholder="date start"
                />
              </div>
              <span className="text-gray-500">to</span>
              <div className="relative w-full sm:w-auto">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  id="datepicker-range-end"
                  name="end"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-32 ps-10 p-2.5"
                  placeholder="date end"
                />
              </div>
            </div>
            <button
              type="button"
              className="focus:outline-none text-white bg-[#746F69] hover:bg-[#9d794c] focus:ring-4 focus:ring-[#9d794c] font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Submit
            </button>
          </form>

          {/* Search component placed below form on mobile, side on desktop */}
          <div className="w-full md:w-auto">
            <Search />
          </div>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-900 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  رقم الفاتورة
                </th>
                <th scope="col" className="px-6 py-3">
                  عدد الأصناف
                </th>
                <th scope="col" className="px-6 py-3">
                  إجمالي السعر
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-6 py-4"> 1000000001 </td>
                <td className="px-6 py-4"> 1</td>
                <td className="px-6 py-4">100</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  2
                </th>
                <td className="px-6 py-4">1000000002 </td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4"> 50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default SalesReports;
