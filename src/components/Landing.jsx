import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
        {/* <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
          <a href="/login" className="text-sm text-gray-700 underline">
            Log in
          </a>
        </div> */}

        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <center className="mt-10">
          <Image src="/logo.png" alt="Logo" loading="lazy" width={210} height={200} />

            <br />
            <h1 className="text-5xl text-white mb-2">Galaxy Store</h1>
            <br />
            <Link href="/login" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">
              Log in
            </Link>
          </center>
        </div>
      </div>
    </>
  );
};

export default Landing;
