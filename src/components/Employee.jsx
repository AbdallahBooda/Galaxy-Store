import Link from "next/link";
import Pagination from "./Pagination";
import Search from "./Search";

const Employee = () => {
  return (
    <>
      <h1 className="m-6 mt-24 font-semibold text-lg text-gray-900">
        تصنيف الموظفين{" "}
      </h1>
      <div className="block max-w p-6 m-6 bg-white border border-gray-200 rounded-lg shadow-2xl">
        <div className="flex items-center justify-between mb-4">
        <Link
          href="employee/create"
          className="focus:outline-none text-white bg-[#746F69] hover:bg-[#9d794c] focus:ring-4 focus:ring-[#9d794c] font-medium rounded-lg text-sm px-5 py-2.5 me-2"
        >
          اضافة موظف
        </Link>
        
        {/* <Search /> */}
      </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-900 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  اسم الموظف
                </th>
                <th scope="col" className="px-6 py-3">
                  نوع الموظف
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
                <td className="px-6 py-4">محمد عبدالله </td>
                <td className="px-6 py-4">أحمد مغني</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  2
                </th>
                <td className="px-6 py-4">صيانة </td>
                <td className="px-6 py-4">كاشير</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default Employee;
