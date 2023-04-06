import Layout from "@/components/Layout";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { HiUser, HiOutlinePhone } from "react-icons/hi";
import { MdNumbers } from "react-icons/md";

export default function Pendaftaran() {
  const Pendaftaran = () => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [nowa, setNowa] = useState("");
    const [nim, setNim] = useState("");
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault();

      // Get data from the form.
      const data = {
        first: event.target.first.value,
        last: event.target.last.value,
      };

      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data);

      // API endpoint where we send form data.
      const endpoint = "/api/form";

      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };

      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options);

      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json();
      alert(`Is this your personal information: ${result.data}`);
    };
  };

  return (
    <Layout>
      <p className="text-gray-700 text-3xl mb-16 ml-10 font-bold">
        Pendaftaran
      </p>
      <>
        <div className="border-2 w-10 border-[#192f59] inline-block mb-2 ml-10"></div>
        <div className="bg-gray-100 w-auto p-2 flex items-center mb-3 ml-10">
          <HiUser className="text-gray-400 m-2" />
          <input
            type="nama"
            name="nama"
            placeholder="Nama"
            className="bg-gray-100 outline-none text-sm flex-1"
          />
        </div>
        <div className="bg-gray-100 w-auto p-2 flex items-center mb-3 ml-10">
          <MdNumbers className="text-gray-400 m-2" />
          <input
            type="nim"
            name="nim"
            placeholder="NIM"
            className="bg-gray-100 outline-none text-sm flex-1"
          />
        </div>
        <div className="bg-gray-100 w-auto p-2 flex items-center mb-3 ml-10">
          <HiOutlinePhone className="text-gray-400 m-2" />
          <input
            type="nomer"
            name="nomer"
            placeholder="No Whatsapp"
            className="bg-gray-100 outline-none text-sm flex-1"
          />
        </div>
        <div className="bg-gray-100 w-auto p-2 flex items-center mb-3 ml-10">
          <FaRegEnvelope className="text-gray-400 m-2" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-gray-100 outline-none text-sm flex-1"
          />
        </div>

        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-10"
            for="file_input"
          >
            Upload file KTM
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none
       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 ml-10"
            id="file_input"
            type="file"
          />
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-10"
            for="file_input"
          >
            Upload file Sertifikat BAM
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none
       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 ml-10"
            id="file_input"
            type="file"
          />
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-10"
            for="file_input"
          >
            Upload file Transkrip Nilai
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none
       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 ml-10"
            id="file_input"
            type="file"
          />
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-10"
            for="file_input"
          >
            Upload file Sertifikat Baca Al-Qur'an
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none
       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 ml-10"
            id="file_input"
            type="file"
          />
        </div>
        <div className="flex justify-between w-auto ml-10 mt-3">
          <label className="flex items-center text-xs">
            <input required type="checkbox" name="Wajib" className="mr-3" />{" "}
            Bersedia Mengikuti Kegiatan Sampai Akhir
          </label>
        </div>
        <a
          href="#"
          className="border-2 border-[#192f59] text-[#192f59] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#192f59]  hover:text-white mt-3 ml-10"
        >
          Submit
        </a>
      </>
    </Layout>
  );
}
