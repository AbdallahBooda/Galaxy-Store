import Image from "next/image";

export const metadata = {
  title: {
    default: "Login",
    template: "%s",
  },
  description:
    "Access your account securely with our login page. Enter your credentials to manage your account and access exclusive features at Galaxy Store.",
};

const Login = () => {
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
          <div className="my-2"></div>
          <h3 className="text-2xl font-bold sm:text-2xl whitespace-nowrap">
            Galaxy Store
          </h3>
        </div>
        <form
          className="max-w-lg w-full mx-auto bg-white p-8 rounded-lg shadow-md"
          dir="ltr"
        >
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="name@example.com"
              required
            />
          </div>
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="Your Password"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-3 text-lg font-medium text-gray-900"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-6 py-3 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
