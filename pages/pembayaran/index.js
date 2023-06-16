import Layout from "@/components/Layout";

const Pembayaran = () => {
  return (
    <Layout>
      <p className="text-gray-700 text-3xl mb-16 ml-10 font-bold">Pembayaran</p>

      <div className="grid lg:grid-cols-1 fap-5">
        <div className="rounded bg-gray-100 h-70 w-70 shadow-sm mr-60 ml-60">
          <div>
            <p className="text-gray-500 text-xl font-bold ml-25 mr-25 text-center leading-loose">
              Pembayaran dilakukan di : <br></br>
              082111093445 (DANA, GOPAY)<br></br>
              0265542898964(bsi) <br></br>
              544566987988956 (BCA) <br></br>
              DWIDGEFRGWUE BAYAR WOI <br></br>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pembayaran;
