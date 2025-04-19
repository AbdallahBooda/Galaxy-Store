
const BarcodeScanner = () => {
  return (
    <>
      <div className="space-y-4">
        {/* Barcode Scanner */}
        <div className="h-12 w-full bg-[#8A8680] p-2 rounded shadow-lg">
          <input
            type="text"
            placeholder="باركود الصنف..."
            className="w-full p-2 rounded text-black outline-none shadow-lg"
          />
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-900 uppercase bg-[#8A8680]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  الصنف
                </th>
                <th scope="col" className="px-6 py-3">
                  سعر
                </th>
                <th scope="col" className="px-6 py-3">
                  كمية
                </th>
                <th scope="col" className="px-6 py-3">
                  خصم
                </th>
                <th scope="col" className="px-6 py-3">
                  اجمالي
                </th>
                <th scope="col" className="px-6 py-3">
                  حذف
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  ساعة
                </th>
                <td className="px-6 py-4">1000</td>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">50</td>
                <td className="px-6 py-4">1950</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        
      </div>
    </>
  );
};

export default BarcodeScanner;
