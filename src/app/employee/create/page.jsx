import CreateEmployee from "@/components/CreateEmployee"
export const metadata = {
  title: {
    default: "Create Employee",
    template: "%s",
  },
  description: "Easily add new employees to your system with detailed information such as personal details, roles, and salary. Streamline your HR onboarding process with a simple and efficient interface.",
};

const page = () => {
  return (
   <>
   <CreateEmployee />
   </>
  )
}

export default page