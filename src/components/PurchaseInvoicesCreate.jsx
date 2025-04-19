const PurchaseInvoicesCreate = () => {
  return (
    <>
      <h1 className="m-6 mt-24 font-semibold text-lg text-gray-900">
        اضافة فاتورة مشتريات
      </h1>

      <div className="block max-w p-6 m-6 bg-white border border-gray-200 rounded-lg shadow">
        <form className="space-y-6">
          {/* Supplier Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1">اختر المورد</label>
              <select
                name="supp_id"
                id="supp"
                className="w-full border border-gray-300 rounded px-2 py-2"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  إختر المورد
                </option>
                <option value="1">mohamed</option>
                <option value="2">Abdallah</option>
              </select>
            </div>
          </div>

          {/* Barcode Scanner */}
          <div>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-2 py-2 mt-4"
              //   id="barcodeScannerVal"
              placeholder="باركود الصنف..."
            />
          </div>

          {/* Product Table */}
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-900 uppercase bg-[#8A8680]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    اســـم المنتـــج
                  </th>
                  <th scope="col" className="px-6 py-3">
                    السعر
                  </th>
                  <th scope="col" className="px-6 py-3">
                    كمية الفرع 1
                  </th>
                  <th scope="col" className="px-6 py-3">
                    كمية الفرع 2
                  </th>
                  <th scope="col" className="px-6 py-3">
                    الاجمالي
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ملاحظات
                  </th>
                  <th scope="col" className="px-6 py-3">
                    حذف
                  </th>
                </tr>
              </thead>
            </table>
          </div>

          {/* Summary Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 text-right">
            <div>
              <label className="block mb-1">إجمالي الاصناف</label>
              <input
                type="number"
                name="pro_count"
                value="0"
                readOnly
                className="w-full border border-gray-300 rounded px-2 py-1 bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-1">الإجمالي النهائي</label>
              <input
                type="number"
                step="0.001"
                name="final_total"
                value="0"
                readOnly
                className="w-full border border-gray-300 rounded px-2 py-1 bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-1">المبلغ المدفوع</label>
              <input
                type="number"
                step="0.001"
                name="paid_amount"
                defaultValue="0"
                className="w-full border border-gray-300 rounded px-2 py-1 bg-gray-100"
                required
              />
            </div>

            <div>
              <label className="block mb-1">المبلغ المتبقي</label>
              <input
                type="number"
                step="0.001"
                name="remaining_amount"
                value="0"
                readOnly
                className="w-full border border-gray-300 rounded px-2 py-1 bg-gray-100"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              type="submit"
              className="bg-[#9d794c] text-white px-6 py-2 rounded disabled:opacity-60"
              id="save_validate"
              disabled
            >
              حفظ
            </button>

            <a
              href="http://127.0.0.1:8000/admin/purchasebill"
              className="bg-gray-800 text-white px-6 py-2 rounded text-center"
            >
              إلغاء
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default PurchaseInvoicesCreate;
