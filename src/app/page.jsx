import Landing from "@/components/Landing";
import { getServerSession } from "next-auth";

const Home = () => {
  // const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <>
    {/* <h1 className="text-red-800 mt-24 p-24">welcome {session?.user?.name || "Guest"}</h1> */}
      <Landing />
    </>
  );
};

export default Home;
