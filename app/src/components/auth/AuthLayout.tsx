import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

type AuthMode = "login" | "signup";

const AuthLayout = ({ mode }: { mode: AuthMode }) => {
  const isLogin = mode === "login";
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {isLogin ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default AuthLayout;
