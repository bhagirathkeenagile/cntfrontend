export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 60 seconds
      next: { revalidate: 60 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      <div className="grid min-h-screen w-full grid-cols-5">
      <div className="loginBack relative col-span-5 lg:col-span-2 p-10">
            <div>
              <a href="http://availrecovery.keenagile.in" className="py-2">
                <img
                  src={new URL("../public/logo.png", import.meta.url).toString()}
                  alt="Precedent Logo"
                  className="h-10 opacity-95"
                />
              </a>
              <h1 className="pb-5 text-white">
                IT Asset Disposition (ITAD) Customer Portal
              </h1>
            </div>
            <div className="lg:absolute bottom-16">
              <p className="mb-4 pr-10 text-white text-sm sm:text-md">
                A platform for quoting and booking ITAD lots/shipments, tracking
                project statuses in real time, running detailed asset reports, and
                collaborating across multiple users in your organization.
              </p>
              <p className=" text-white text-sm sm:text-md">2022 | Avail Recovery LLC © Copyright</p>
            </div>
          </div>
        <div className="col-span-5 lg:col-span-3 bg-white  py-8">
          <div className="flex justify-between">
            <div className="px-3 text-xs sm:text-base">
              <p>
                Dont have an account yet?{" "}
                <span>
                  <a
                    href="http://availrecovery.keenagile.in/register"
                    className="primaryColor"
                  >
                    Sign Up
                  </a>
                </span>
              </p>
            </div>
            <div className="flex items-center px-4">
            <img
                  src={new URL("../public/icon2.png", import.meta.url).toString()}
                  alt="Precedent Logo"
                  className="h-3 md:h-6 opacity-95"
                />
                <img
                  src={new URL("../public/icon1.png", import.meta.url).toString()}
                  alt="Precedent Logo"
                  className="h-6 md:h-12 opacity-95"
                />
            </div>
          </div>
          <div className="">
            <div className="mx-auto px-10 lg:px-28 xl:px-44 pt-10">
              <form className="w-100">
                <div className="mb-5 text-center">
                  <h1 className="text-dark mb-3 text-3xl font-semibold">
                    Sign In
                  </h1>
                  <h2 className="text-gray-600 text-sm sm:text-md lg:text-lg">
                    Welcome{" "}
                    <strong className="text-gray-800">Avail Recovery</strong>{" "}
                    and <strong className="text-gray-800">Teladvance</strong>{" "}
                    customers to the new ITAD USA experience.
                  </h2>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email <span className="text-red-400">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="my-4">
                  <div className="flex justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password <span className="text-red-400">*</span>
                    </label>
                    <a
                      href="http://availrecovery.keenagile.in/forgot-password"
                      className="primaryColor font-light text-sm sm:text-md"
                    >
                      Forgot Password ?
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="*******"
                    />
                  </div>
                </div>
                <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-600">
              Remember Me
            </label>{' '}
            
          </div>
        </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-lg loginbtn w-full rounded p-3 mt-6 mb-5"
                  >Continue
                
                  </button>
                  <div className="grid sm:grid-cols-2 sm:gap-4">
                    <a
                      href="http://availrecovery.keenagile.in/auth/google/redirect?authType=login"
                      className="flex justify-around px-4 py-3 mediaBtn items-center rounded mb-5"
                    >
                      <img
                        alt="Logo"
                        src="http://availrecovery.keenagile.in/media/svg/brand-logos/icons8-google-96.svg"
                        className="h-6"
                      />
                      Continue with Google
                    </a>
                    <a
                      href="http://availrecovery.keenagile.in/auth/microsoft/redirect?authType=login"
                      className="flex justify-around px-4 py-3 mediaBtn items-center rounded  mb-5"
                    >
                      <img
                        alt="Logo"
                        src="http://availrecovery.keenagile.in/media/svg/brand-logos/icons8-microsoft-96.svg"
                        className="h-6"
                      />
                      Continue with Microsoft
                    </a>
                  </div>
                </div>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
