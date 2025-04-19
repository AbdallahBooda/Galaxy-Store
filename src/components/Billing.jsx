const Billing = () => {
  return (
    <>
      <div className="space-y-4">
        <form className="max-w-full mx-auto">
          <div className="h-12 w-full bg-[#8A8680] p-2 rounded shadow-lg">
            <input
              type="text"
              placeholder="بحث برقم هاتف"
              className="w-full p-2 rounded text-black outline-none shadow-lg"
            />
          </div>

          {/* Totals */}
          <div className="mt-4 bg-[#8A8680] p-4 rounded grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <label>اسم العميل</label>
              <input
                type="text"
                className="block w-full p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
              />
            </div>
            <div>
              <label>رقم الهاتف</label>
              <input
                type="text"
                className="block w-full p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
              />
            </div>
            <div>
              <label>موظف الصيانة</label>
              <input
                type="text"
                className="block w-full p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
              />
            </div>

            <div className="col-span-1 md:col-span-3">
              <label htmlFor="message">بيانات الجهاز والاعطال</label>
              <textarea
                id="message"
                rows="3"
                className="block w-full p-2 mt-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              ></textarea>
            </div>
            {/* Payment Inputs */}
            <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label>تكلفة قطع الغيار</label>
                <input
                  type="number"
                  defaultValue="0"
                  className="w-full border p-2 mt-2 rounded"
                />
              </div>
              <div>
                <label>تكلفة الصيانة</label>
                <input
                  type="number"
                  defaultValue="0"
                  className="w-full border p-2 mt-2 rounded"
                />
              </div>
              <div>
                <label>المدفوع</label>
                <input
                  type="number"
                  defaultValue="0"
                  className="w-full border p-2 mt-2 rounded"
                />
              </div>
              <div>
                <label>المتبقي</label>
                <input
                  type="text"
                  defaultValue="0"
                  className="w-full border p-2 mt-2 rounded"
                />
              </div>
            </div>
            {/* Buttons */}
            <div className=" grid grid-cols-2 gap-2 mt-6 w-full md:w-[525px]">
              <button className="w-full bg-[#9d794c] text-white py-2 rounded">
                💰 حفظ الفاتورة
              </button>
              <button className="w-full bg-gray-800 text-white py-2 rounded">
                🗑️ إلغاء الفاتورة
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Billing;
