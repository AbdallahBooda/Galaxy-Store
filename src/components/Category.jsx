import Link from "next/link";
import Pagination from "./Pagination";
import Search from "./Search";

const Category = () => {
  return (
    <>
      <h1 className="m-6 mt-24 font-semibold text-lg text-gray-900">
        تصنيف المنتجات{" "}
      </h1>
      <div className="block max-w p-6 m-6 bg-white border border-gray-200 rounded-lg shadow-2xl">
        {/* <div className="flex items-center justify-between mb-4">
          <Link
            href=""
            className="focus:outline-none text-white bg-[#746F69] hover:bg-[#9d794c] focus:ring-4 focus:ring-[#9d794c] font-medium rounded-lg text-sm px-5 py-2.5 me-2"
          >
            اضافة منتج
          </Link>
          <Link
            href=""
            className="flex items-center justify-between focus:outline-none text-white bg-[#746F69] hover:bg-[#9d794c] focus:ring-4 focus:ring-[#9d794c] font-medium rounded-lg text-sm px-5 py-2.5 me-2"
          >
            <svg
              className="w-5 h-5 pl-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M128 0C92.7 0 64 28.7 64 64l0 96 64 0 0-96 226.7 0L384 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0L128 0zM384 352l0 32 0 64-256 0 0-64 0-16 0-16 256 0zm64 32l32 0c17.7 0 32-14.3 32-32l0-96c0-35.3-28.7-64-64-64L64 192c-35.3 0-64 28.7-64 64l0 96c0 17.7 14.3 32 32 32l32 0 0 64c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-64zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
            {"    "}
            طباعة الباركود
          </Link>
          <Search />
        </div> */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-900 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  اسم تصنيف
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
                <td className="px-6 py-4">سمارت فون </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  2
                </th>
                <td className="px-6 py-4">فون عادي</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default Category;
