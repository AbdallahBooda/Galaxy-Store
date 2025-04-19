const Payment = () => {
  return (
    <>
      <div className="p-4 space-y-6 bg-[#8A8680] rounded-md">
        <form className="max-w-full space-y-4">
          {/* Summary Table */}
          <div className="overflow-x-auto">
            <div className="flex flex-wrap gap-3 items-center bg-gray-50 p-2 rounded ">
              <div className="flex items-center gap-1">
                <span>اجمالي قبل خصم:</span>
                <input
                  type="text"
                  className="block w-12 p-1 text-gray-900 border border-gray-500 rounded-md bg-gray-50 text-xs text-center"
                  defaultValue="0"
                />
                {/* <span>ج</span> */}
              </div>

              <div className="flex items-center gap-1">
                <span>اجمالي الخصم:</span>
                <input
                  type="text"
                  className="block w-12 p-1 text-gray-900 border border-gray-500 rounded-md bg-gray-50 text-xs text-center"
                  defaultValue="0"
                />
                {/* <span>ج</span> */}
              </div>

              <div className="flex items-center gap-1">
                <span>اجمالي الفاتورة:</span>
                <input
                  type="text"
                  className="block w-12 p-1 text-gray-900 border border-gray-500 rounded-md bg-gray-50 text-xs text-center"
                  defaultValue="0"
                />
                {/* <span>ج</span> */}
              </div>
            </div>
          </div>

          {/* Payment Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-right">
            <div>
              <label className="block mb-1">المدفوع</label>
              <input
                type="number"
                step="0.001"
                name="paid_amount"
                id="paid_amount"
                className="w-full border border-gray-300 rounded px-2 py-1"
                defaultdefaultValue="0"
              />
            </div>

            <div>
              <label className="block mb-1 ">المتبقي</label>
              <input
                type="number"
                step="0.001"
                name="remaining_amount"
                id="remaining_amount"
                defaultValue="0"
                // readOnly
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div>
              <label htmlFor="pay_way" className="block mb-1 ">
                طريقة الدفع
              </label>
              <select
                name="pay_way"
                id="pay_way"
                className="w-full h-[30px] border border-gray-300 rounded px-2"
              >
                <option defaultValue="0">كاش</option>
                <option defaultValue="1">فيزا</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className=" grid grid-cols-2 gap-2 mt-6 w-full md:w-[525px]">
              <button className="w-full bg-[#9d794c] text-white py-2 rounded">
                 حفظ الفاتورة
              </button>
              <button className="w-full bg-gray-800 text-white py-2 rounded">
                 إلغاء الفاتورة
              </button>
            </div>
        </form>
      </div>
    </>
  );
};

export default Payment;
