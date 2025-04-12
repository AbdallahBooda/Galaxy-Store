"use client";
import React, { useState } from "react";
// import DatePicker from "react-datepicker";

const Reports = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <>
      <h1 className="m-6 mt-24 font-semibold text-lg text-gray-900">
        عرض التقارير{" "}
      </h1>
      <div className="block max-w p-6 m-6 bg-white border border-gray-200 rounded-lg shadow-2xl">
        <form>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                >
                  المبيعات
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-id"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="horizontal-list-radio-id"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                >
                  المشتريات
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-military"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="horizontal-list-radio-military"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                >
                  الصيانة
                </label>
              </div>
            </li>
          </ul>

          <div
            id="date-range-picker"
            data-rangepicker
            className="flex items-center mt-12"
          >
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                id="datepicker-range-start"
                name="start"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="Select date start"
              />
            </div>
            <span className="mx-4 text-gray-500">to</span>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                id="datepicker-range-end"
                name="end"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="Select date end"
              />
            </div>
          </div>
          <button
            type="button"
            className="focus:outline-none m-6 text-white bg-[#746F69] hover:bg-[#9d794c] focus:ring-4 focus:ring-[#9d794c] font-medium rounded-lg text-sm px-5 py-2.5 me-2"
          >
            عرض
          </button>
        </form>
      </div>
    </>
  );
};

export default Reports;
