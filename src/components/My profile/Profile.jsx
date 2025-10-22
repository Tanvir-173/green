import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../context/AuthProvider";
import { auth } from "../../firebase/firebase.init";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setLoading(true);

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        setUser({ ...auth.currentUser });
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="card bg-white w-full max-w-md shadow-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">My Profile</h2>

        {user ? (
          <>
            <div className="flex flex-col items-center mb-6">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-24 h-24 rounded-full mb-3 border"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="text-6xl text-gray-400 mb-3"
                />
              )}
              <h3 className="text-lg font-medium">
                {user.displayName || "No name"}
              </h3>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Photo URL</label>
                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Profile"}
              </button>
            </form>
          </>
        ) : (
          <p className="text-center text-gray-600">
            Please log in to view your profile.
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
