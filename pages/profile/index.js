import Layout from "@/components/Layout";
import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState("profile");

  const handlerProfile = (e) => {
    setProfile(e);
  };
  return (
    <Layout>
      <p className="text-gray-700 text-3xl mb-16 ml-10 font-bold">Profile</p>
      <div className="App" style={{ display: "flex", width: "100%" }}>
        <div
          className="rounded bg-gray-300 ml-10 mr-10"
          style={{ width: "50%" }}
        >
          <div
            className="rounded bg-gray-100 m-2"
            style={{ padding: "15px", border: "10px" }}
          >
            <div>
              <button onClick={() => handlerProfile("profile")}>Profile</button>
            </div>
          </div>
          <div style={{ padding: "15px", border: "10px" }}>
            <div>
              <button onClick={() => handlerProfile("test2")}>Test 2</button>
            </div>
            <div>Profile</div>
            <div>Profile</div>
          </div>
        </div>
        <div
          className="rounded bg-gray-300 ml-10 mr-10"
          style={{ width: "50%", padding: "15px", border: "10px" }}
        >
          <div>
            {profile === "profile" ? (
              <div>
                <div>Ilham gay</div>
              </div>
            ) : (
              ""
            )}
            {profile === "test2" ? "Profile Irgi" : ""}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
