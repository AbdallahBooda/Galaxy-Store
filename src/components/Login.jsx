"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { AuthStore } from "@/store/AuthStore";

// ZOD SCHEMA
const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});

export default function LoginForm() {
  const router = useRouter();
  const login = AuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);

    const allowedEmail = "abdallah.abdelhameed99@gmail.com";
    const allowedPassword = "12345678";

    // EMAIL check
    if (data.email !== allowedEmail) {
      alert("❌ Access denied: this email cannot log in.");
      return;
    }

    // PASSWORD check
    if (data.password !== allowedPassword) {
      alert("❌ Wrong password.");
      return;
    }

    // SUCCESS
    login(data.email); // store logged-in email in Zustand
    router.push("/dashboard");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center mb-6">
          <Image
            src="/logo.webp"
            alt="Logo"
            priority
            loading="eager"
            width={150}
            height={150}
          />

          <h3 className="text-2xl font-bold mt-2 whitespace-nowrap">
            Galaxy Store
          </h3>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg w-full mx-auto bg-white p-8 rounded-lg shadow-md"
          dir="ltr"
        >
          {/* EMAIL */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-3 text-lg font-medium text-gray-900"
            >
              Your email
            </label>

            <input
              type="email"
              id="email"
              {...register("email")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="name@example.com"
            />

            {errors.email && (
              <p className="text-red-600 mt-2">{errors.email.message}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-3 text-lg font-medium text-gray-900"
            >
              Your password
            </label>

            <input
              type="password"
              id="password"
              {...register("password")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="Your Password"
            />

            {errors.password && (
              <p className="text-red-600 mt-2">{errors.password.message}</p>
            )}
          </div>

          {/* REMEMBER ME */}
          <div className="flex items-start mb-6">
            <input
              id="remember"
              type="checkbox"
              {...register("remember")}
              className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <label
              htmlFor="remember"
              className="ms-3 text-lg font-medium text-gray-900"
            >
              Remember me
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full px-6 py-3"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
