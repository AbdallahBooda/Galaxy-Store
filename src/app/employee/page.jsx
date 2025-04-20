import Employee from "@/components/Employee"
export const metadata = {
  title: {
    default: "Employee",
    template: "%s",
  },
  description: "Manage employee details, roles, and performance in one centralized platform. Streamline HR processes, track attendance, and keep records up to date with ease."
};

const page = () => {
  return (
    <Employee />
  )
}

export default page