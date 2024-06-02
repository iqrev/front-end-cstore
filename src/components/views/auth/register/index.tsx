
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const RegisterView = () => {
  return (
    <section className="full">
      <div className="container mx-auto h-ful">
        <div className="flex flex-col xl:flex-row items-center justify-center gap-40 xl:pt-8 xl:pb-24">
          {/* photo */}
          <div className="">
            <Image
              src="/assets/logo-cakapindstore.png"
              alt="login"
              width={500}
              height={500}
            />
          </div>
          {/* form */}
          <div className="container mx-auto h-ful">
            <div className="mx-auto w-full max-w-sm">
              <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-lg">
                Daftarkan Akun Kamu
              </h1>
            </div>

            <div className="mt-10">
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                    Password Confirmation
                  </label>

                  <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 items-center">
                  <label htmlFor="registAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="registAccept"
                      name="regist_accept"
                      className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      Dengan membuat akun, Anda setuju dengan peraturan dan kebijakan kami!
                    </span>
                  </label>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <div>
                    <Button>Login</Button>
                  </div>
                </div>
              </form>

              <p className="">
                <br />
                Sudah Punya Akun??
                <Link href="/auth/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Login Disini
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}

export default RegisterView;