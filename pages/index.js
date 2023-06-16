import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import Head from "next/head";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-scren py-2 bg-gray-100">
      <Head>
        <title>Baitul Arqam Purna Studi</title>
        <link
          rel="icon"
          href="../public/assets/projects/logo uhamka.png"
        ></link>
      </Head>

      <main className="flex flex-col items-center justify-center w-full  px-20 text-center h-screen">
        <div className=" bg-white rounded-2xl shadow 2xl flex  max-w-4xl">
          <div className="lg:grid-cols-2 w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-[#192f59]">
                BAITUL ARQAM PURNA STUDI<br></br>
              </span>
              UHAMKA
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-[#192f59] mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-[#192f59] inline-block mb-2"></div>
              <p className="text-gray-400 my-3">NIM</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="nim"
                    name="nim"
                    placeholder="Username"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />{" "}
                    Remember me
                  </label>
                  <a href="#" className="text-xs">
                    {" "}
                    Forgot Password?
                  </a>
                </div>

                <a
                  href="#"
                  className="border-2 border-[#192f59] text-[#192f59] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#192f59]  hover:text-white"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
          {/* Sign In section */}
          <div className="lg:grid-cols-2  bg-[#192f59] text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2 ">
              Assalamualaikum Sobat UHAMKA!
            </h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
