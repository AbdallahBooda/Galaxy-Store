const CreateProduct = () => {
  return (
    <>
      <h1 className="m-6 mt-24 font-semibold text-lg text-gray-900">
        اضافة منتج جديد
      </h1>
      <div className="block max-w p-6 m-6 bg-white border border-gray-200 rounded-lg shadow">
        <form className="space-y-6">
          <input
            type="hidden"
            name="_token"
            value="993KUBDVMiS235QnPNuqDdmNOeskmDxv4JOuDtHF"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block mb-1 font-medium">اسم الصنف</label>
              <input
                type="text"
                name="name_ar"
                placeholder="اسم الصنف"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">سعر البيع</label>
              <input
                type="number"
                step="0.0001"
                defaultValue="0"

                name="sale_price"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">الخصم الافتراضي</label>
              <input
                type="number"
                name="default_discount"
                defaultValue="0"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                حد انتهاء المخزون
              </label>
              <input
                type="number"
                name="stock_limit"
                defaultValue="0"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">التصنيف</label>
              <select
                name="category_id"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  اختار الصنف
                </option>
                <option value="1">سمارت فون</option>
                <option value="2">فون عادي</option>
                <option value="3">إكسسوارات فون</option>
                <option value="4">هاتف منزلي</option>
                <option value="5">اكسسوارات كمبيوتر</option>
                <option value="6">أجهزة سمعية</option>
                <option value="7">اكسسوارات بلايستيشن</option>
                <option value="8">أجهزة لوحية</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">
                مخزون الفرع الأول
              </label>
              <input
                type="number"
                name="available_quantity_1"
                defaultValue="0"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                مخزون الفرع الثاني
              </label>
              <input
                type="number"
                name="available_quantity_2"
                defaultValue="0"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">ملاحظات</label>
              <input
                type="text"
                name="notes"
                placeholder="ملاحظات"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-[#9d794c] text-white px-6 py-2 rounded"
            >
              حفظ
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
