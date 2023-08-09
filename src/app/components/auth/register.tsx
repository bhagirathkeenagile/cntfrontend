export default async function register() {
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
              <div className="px-3 text-sm sm:text-md">
                <p>
                Already have an Account ? 
                  <span>
                    <a
                      href="http://availrecovery.keenagile.in/register"
                      className="primaryColor ml-1"
                    >
                      Sign In
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
                    <h1 className="text-dark mb-2 text-2xl ">
                      Sign Up
                    </h1>
                    <h2 className="fw-semibold fs-4 text-gray-600 ">
                  Fill out the below details to register
                    </h2>
                  </div>
  
                  <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    </div>
                    <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Last Name"
                      />
                    </div>
                  </div>
                  </div>
                  <div className="my-4">
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
                        placeholder="Enter Email ID"
                      />
                      <p className="text-sm text-gray-400 p-0">Email address must be a business address cannot have any of these domains:
                  gmail.com, yahoo.com, hotmail.com, aol.com, msn.com, comcast.net, ymail.com, outlook.com, live.com.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                       Company Name <span className="text-red-400">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Company Name"
                      />
                    </div>
                    </div>
                    <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </div>
                  </div>
  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-lg loginbtn w-full rounded p-3 mt-6 mb-5"
                    >Submit
                  
                    </button>
                    <div className="grid sm:grid-cols-2 sm:gap-4">
                      <a
                        href="http://availrecovery.keenagile.in/auth/google/redirect?authType=login"
                        className="flex justify-center px-4 py-3 mediaBtn items-center rounded mb-5"
                      >
                        <img
                          alt="Logo"
                          src="http://availrecovery.keenagile.in/media/svg/brand-logos/icons8-google-96.svg"
                          className="h-6 mr-2"
                        />
                        Continue with Google
                      </a>
                      <a
                        href="http://availrecovery.keenagile.in/auth/microsoft/redirect?authType=login"
                        className="flex justify-center px-4 py-3 mediaBtn items-center rounded  mb-5"
                      >
                        <img
                          alt="Logo"
                          src="http://availrecovery.keenagile.in/media/svg/brand-logos/icons8-microsoft-96.svg"
                          className="h-6 mr-2"
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
  