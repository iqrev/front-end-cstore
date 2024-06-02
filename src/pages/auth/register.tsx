import RegisterView from "@/components/views/auth/register";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <RegisterView />
      <Footer />
    </>
  );
}

export default RegisterPage;