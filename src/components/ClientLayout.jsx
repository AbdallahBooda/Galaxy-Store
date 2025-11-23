"use client";

import NavBar from "@/components/NavBar";
import { AuthStore } from "@/store/AuthStore";

export default function ClientLayout({ children }) {
  const isLoggedIn = AuthStore((state) => state.isLoggedIn);

  return (
    <div className="flex flex-col md:flex-row">

      {/* Show NavBar ONLY when user is logged in */}
      {isLoggedIn && (
        <div className="w-full md:w-64">
          <NavBar />
        </div>
      )}

      <main className="flex-1 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  );
}
