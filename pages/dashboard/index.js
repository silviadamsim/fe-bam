import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  return (
    <Layout>
      <p className="text-gray-700 text-3xl mb-16 ml-10 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-4 fap-5 mb-16 ml-10">
        <div className="rounded bg-gray-300 h-100% w-100% mr-2 mb-10 shadow-sm ">
          <Link href="/profile">
            <div
              className={`pl-6 py-3 mx-2 text-center cursor pointer flex items-center  ${
                router.pathname == "/profile"
                  ? "text-white-100"
                  : "text-black-100"
              }`}
            >
              <div>
                <p className="mt-4 text-xl font-bold">Profile</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="rounded bg-gray-300  h-100% w-100% mr-2 mb-10 shadow-sm">
          <Link href="/pendaftaran">
            <div
              className={`pl-6 py-3 mx-2 text-center cursor pointer flex items-center  ${
                router.pathname == "/pendaftaran"
                  ? "text-white-100"
                  : "text-black-100"
              }`}
            >
              <div>
                <p className="mt-4 text-xl font-bold">Pendaftaran</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="rounded bg-gray-300  h-100% w-100% mr-2 mb-10 shadow-sm">
          <Link href="/pembayaran">
            <div
              className={`pl-6 py-3 mx-2 text-center cursor pointer flex items-center  ${
                router.pathname == "/pembayaran"
                  ? "text-white-100"
                  : "text-black-100"
              }`}
            >
              <div>
                <p className="mt-4 text-xl font-bold">Pembayaran</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
