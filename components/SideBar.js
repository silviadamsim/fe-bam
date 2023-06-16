import { forwardRef } from "react";
import Link from "next/link";
import { HiHome, HiUser, HiLogout, HiPencil } from "react-icons/hi";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-[#192f59] shadow-sm">
      <div className="flex justify-end mt-6 mb-14">
        <a className="navbar-brand" href="/dashboard">
          <img
            className="w-32 h-auto mr-10 cursor-pointer"
            src="/logo uhamka.png"
            alt="company logo"
          />
        </a>
      </div>

      <div className="flex flex-col">
        <Link href="/dashboard">
          <div
            className={`pl-6 py-3 mx-2 rounded text-center cursor pointer flex items-center transition-colors ${
              router.pathname == "/dashboard"
                ? "bg-white text-white-100"
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            }`}
          >
            <div className="mr-2">
              <HiHome className="h-5 w-5" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/profile">
          <div
            className={`pl-6 py-3 mx-2 rounded text-center cursor pointer flex items-center transition-colors ${
              router.pathname == "/profile"
                ? "bg-white text-white-100"
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            }`}
          >
            <div className="mr-2">
              <HiUser className="h-5 w-5" />
            </div>
            <div>
              <p>Profile</p>
            </div>
          </div>
        </Link>
        <Link href="/pendaftaran">
          <div
            className={`pl-6 py-3 mx-2 rounded text-center cursor pointer flex items-center transition-colors ${
              router.pathname == "/pendaftaran"
                ? "bg-white text-white-100"
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            }`}
          >
            <div className="mr-2">
              <HiPencil className="h-5 w-5" />
            </div>
            <div>
              <p>Pendaftaran</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-2 rounded text-center cursor pointer flex items-center transition-colors ${
              router.pathname == "/keluar"
                ? "bg-white text-white-100"
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            }`}
          >
            <div className="mr-2">
              <HiLogout className="h-5 w-5" />
            </div>
            <div>
              <p>Keluar</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
