import Link from "next/link";
import Pagination from "./Pagination";
import Search from "./Search";

const PurchaseInvoices = () => {
  return (
    <>
      <h1 className="m-6 mt-24 font-semibold text-lg text-gray-900">
        إدارة فواتير المشتريات{" "}
      </h1>
      <div className="block max-w p-6 m-6 bg-white border border-gray-200 rounded-lg shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <Link
            href="/purchase-invoices/create"
            className="focus:outline-none text-white bg-[#746F69] hover:bg-[#9d794c] focus:ring-4 focus:ring-[#9d794c] font-medium rounded-lg text-sm px-5 py-2.5 me-2"
          >
            انشاء فاتورة
          </Link>
          <Search />
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
                  المورد
                </th>
                <th scope="col" className="px-6 py-3">
                  عدد الأصناف
                </th>
                <th scope="col" className="px-6 py-3">
                  إجمالي السعر
                </th>

                <th scope="col" className="px-6 py-3">
                  الإعدادات
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
                <td className="px-6 py-4">1000000001</td>
                <td className="px-6 py-4">mohamed</td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">100</td>

                <td className="px-6 py-4">
                  <Link
                    href="#"
                    className="inline-flex m-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#746F69] rounded-lg hover:bg-[#9d794c] focus:ring-4 focus:outline-none focus:ring-[#9d794c]"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 576 512"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  2
                </th>
                <td className="px-6 py-4">1000000002</td>
                <td className="px-6 py-4">mohamed</td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">120</td>

                <td className="px-6 py-4">
                  <Link
                    href="#"
                    className="inline-flex m-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#746F69] rounded-lg hover:bg-[#9d794c] focus:ring-4 focus:outline-none focus:ring-[#9d794c]"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 576 512"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default PurchaseInvoices;
