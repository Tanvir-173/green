import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { auth } from "../../firebase/firebase.init";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import dendro from "../../assets/dendro.jpg"; 

const MAX_URL_LENGTH = 2000; 

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    // Validate photoURL length
    if (photoURL.length > MAX_URL_LENGTH) {
      toast.error("Photo URL is too long. Please use a shorter URL.");
      return;
    }

    setLoading(true);

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL || null, 
      });

      // Update context immediately so Navbar updates
      setUser({
        ...auth.currentUser,
        displayName: name,
        photoURL: photoURL || null,
      });

      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="card bg-white w-full max-w-md shadow-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">My Profile</h2>

        {user ? (
          <>
            <div className="flex flex-col items-center mb-6">
              {photoURL ? (
                <img
                  src={photoURL}
                  alt="User"
                  className="w-24 h-24 rounded-full mb-3 border object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => (e.currentTarget.src = dendro)} 
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
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Enter image URL (max 2000 chars)"
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
