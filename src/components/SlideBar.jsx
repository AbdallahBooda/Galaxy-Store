"use client";
import { useState } from "react";

import Link from "next/link";

const SlideBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 right-0 z-40 w-64 h-screen pt-20 transition-transform translate-x-full border-l border-gray-200 sm:translate-x-0 bg-gray-900"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-900">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center p-2  text-[#8A8680] font-bold rounded-lg hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6 text-[#8A8680] transition duration-75 group-hover:text-[#8A8680]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="me-3 p-1  ">لوحة التحكم</span>
              </Link>
            </li>
            <li>
              <Link
                href="/pos/salebill/create"
                className="flex items-center p-2  text-[#8A8680] font-bold rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6  text-[#8A8680] transition duration-75  group-hover:text-[#8A8680] "
                  fill="currentColor"
                  viewBox="0 0 384 512"
                  aria-hidden="true"
                >
                  <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
                </svg>

                <span className="flex-1 me-3 p-1">نقاط البيع</span>
              </Link>
            </li>
            <li>
              <Link
                href="/sales-invoices"
                className="flex items-center p-2 text-[#8A8680] font-bold rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-[#8A8680] transition duration-75  group-hover:text-[#8A8680] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                >
                  <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
                </svg>
                <span className="flex-1 me-3 p-1">فواتير المبيعات</span>
              </Link>
            </li>
            <li>
              <Link
                href="/maintenance"
                className="flex items-center p-2 text-[#8A8680] font-bold rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-[#8A8680] transition duration-75  group-hover:text-[#8A8680] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                >
                  <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
                </svg>
                <span className="flex-1 me-3 p-1">فواتير الصيانة</span>
              </Link>
            </li>
            <li>
              <Link
                href="/purchase-invoices"
                className="flex items-center p-2 text-[#8A8680] font-bold rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-[#8A8680] transition duration-75  group-hover:text-[#8A8680] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                >
                  <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
                </svg>
                <span className="flex-1 me-3 p-1">فواتير المشتريات</span>
              </Link>
            </li>
            <li>
              <Link
                href="/suppliers"
                className="flex items-center p-2 text-[#8A8680] font-bold rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-[#8A8680] transition duration-75  group-hover:text-[#8A8680] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                >
                  <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
                </svg>
                <span className="flex-1 me-3 p-1">الموردين</span>
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="flex items-center p-2 text-[#8A8680] font-bold rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-[#8A8680] transition duration-75  group-hover:text-[#8A8680] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                >
                  <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
                </svg>
                <span className="flex-1 me-3 p-1">إدارة المنتجات</span>
              </Link>
            </li>
            <li>
              <Link
                href="/category"
                className="flex items-center p-2 text-[#8A8680] font-bold rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-[#8A8680] transition duration-75  group-hover:text-[#8A8680] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                >
                  <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
                </svg>
                <span className="flex-1 me-3 p-1">التصنيف</span>
              </Link>
            </li>
            <li>
              <Link
                href="/employee"
                className="flex items-center p-2 text-[#8A8680] font-bold rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-[#8A8680] transition duration-75  group-hover:text-[#8A8680] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                >
                  <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
                </svg>
                <span className="flex-1 me-3 p-1">الموظفين</span>
              </Link>
            </li>
            <li>
              <Link
                href="/reports"
                className="flex items-center p-2 text-[#8A8680] font-bold rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-[#8A8680] transition duration-75  group-hover:text-[#8A8680] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                >
                  <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
                </svg>
                <span className="flex-1 me-3 p-1">التقارير الجديدة</span>
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center w-full p-2 text-base text-[#8A8680] font-bold transition duration-75 rounded-lg group hover:bg-gray-100  "
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-[#8A8680] transition duration-75 group-hover:text-[#8A8680] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  التقارير
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`py-2 space-y-2 ${dropdownOpen ? "" : "hidden"}`}
              >
                <li>
                  <Link
                    href="/sales-reports"
                    className="flex items-center w-full p-2 text-[#8A8680]  transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  "
                  >
                    تقارير المبيعات
                  </Link>
                </li>
                <li>
                  <Link
                    href="/purchases_reports"
                    className="flex items-center w-full p-2 text-[#8A8680]  transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  "
                  >
                    تقارير المشتريات
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/login"
                className="flex items-center p-2 text-[#8A8680] font-bold rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-[#8A8680] transition duration-75  group-hover:text-[#8A8680] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 me-3 p-1 "> تسجيل الخروج</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SlideBar;
