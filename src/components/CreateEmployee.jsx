const CreateEmployee = () => {
  return (
    <>
      <h1 className="m-6 mt-24 font-semibold text-lg text-gray-900">
        اضافة موظف جديد
      </h1>
      <div className="block max-w p-6 m-6 bg-white border border-gray-200 rounded-lg shadow">
        <form className="space-y-6">
          {/* Employee Type Radios */}
          <div className="space-y-2">
            <div className="flex items-center gap-6">
              <label className="inline-flex items-center space-x-2 gap-1">
                <input
                  type="radio"
                  name="type"
                  value="0"
                  className="w-6 h-6 text-[#9d794c]"
                />

                <span>كاشير</span>
              </label>
              <label className="inline-flex items-center space-x-2 gap-1">
                <input
                  type="radio"
                  name="type"
                  value="0"
                  className="w-6 h-6 text-[#9d794c]"
                />

                <span>صيانة</span>
              </label>
            </div>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">اسم الموظف</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">رقم الهاتف</label>
              <input
                type="text"
                name="phone"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          {/* Cashier Account Fields - always shown in static form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">
                البريد الالكتروني
              </label>
              <input
                type="text"
                name="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">كلمة المرور</label>
              <input
                type="text"
                name="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
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

export default CreateEmployee;
