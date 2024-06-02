
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const LoginView = () => {
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
          <div className="">
            <div className="mx-auto w-full max-w-sm">
              <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-lg">
                Login to your account
              </h1>
            </div>

            <div className="mt-10 mx-auto w-full max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                    />
                  </div>
                </div>
                <div>
                  <Button>Login</Button>
                </div>
              </form>

              <p className="">
                Belum Punya Akun?
                <Link href={"/auth/register"}>
                  <p>Daftar</p>
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>


  );
}

export default LoginView;