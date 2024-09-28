/* eslint-disable no-unused-vars */

import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utlis/constant";

/* eslint-disable react/prop-types */
const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState("age");
  const [gender, setGender] = useState("gender");
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [About, setAbout] = useState(user.About);

  const handleSaveProfile = async () => {
    try {
      const updateData = await axios.put(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          photoUrl,
          About,
        },
        { withCredentials: true }
      );

      console.log(updateData.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center my-6  pb-10">
      <div className="card bg-base-300 w-80 py-0 mx-5 shadow-xl">
        <div className="card-body py-7">
          <h2 className="card-title">Edit Profile</h2>
          <input
            type="text"
            placeholder={user.firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder={user.lastName}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder={age}
            onChange={(e) => setAge(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder={user.photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder={user.About}
            onChange={(e) => setAbout(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <div className="card-actions justify-center">
            <button onClick={handleSaveProfile} className="btn btn-primary">
              Save Profile
            </button>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, age, gender, photoUrl, About }} />
    </div>
  );
};

export default EditProfile;
