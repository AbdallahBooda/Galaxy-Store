"use client";

import { useState } from "react";

const AddSupplier = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="block text-white bg-[#746F69] hover:bg-[#9d794c] focus:ring-4 focus:outline-none focus:ring-[#9d794c] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        اضافة مورد
      </button>

      {isOpen && (
        <div
          id="static-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  اضافة مورد جديد
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <form className="max-w-sm mx-auto">
                  <div className="mb-5">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      اسم المورد
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder=" ادخل اسم المورد"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      هاتف المورد
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder=" ادخل هاتف المورد"
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white bg-[#9d794c] hover:bg-[#9d794c] focus:ring-4 focus:outline-none focus:ring-[#9d794c] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  اضافة
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddSupplier;
