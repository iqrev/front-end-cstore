import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import LoginView from "@/components/views/auth/login";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <LoginView />
      <Footer />
    </>
  );
}

export default LoginPage;