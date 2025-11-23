import LoginForm from "@/components/Login";

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
      <LoginForm />
    </>
  );
};

export default Login;