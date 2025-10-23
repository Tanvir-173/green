import React, { useContext, useState } from "react";
import { 
  createUserWithEmailAndPassword, 
  updateProfile, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";
import { useNavigate, Link } from "react-router";
import { auth } from "../../firebase/firebase.init";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const { setUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const photo = e.target.photo.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  // Password validation
  if (!/(?=.*[A-Z])/.test(password)) {
    setPasswordError("Password must contain at least one uppercase letter.");
    return;
  }
  if (!/(?=.*[a-z])/.test(password)) {
    setPasswordError("Password must contain at least one lowercase letter.");
    return;
  }
  if (password.length < 6) {
    setPasswordError("Password must be at least 6 characters long.");
    return;
  }

  setPasswordError("");
  setLoading(true);

  try {
    // Create user
    const res = await createUserWithEmailAndPassword(auth, email, password);

    // Update profile
    await updateProfile(res.user, {
      displayName: name,
      photoURL: photo,
    });

    // Instantly update AuthContext
    setUser({
      ...res.user,
      displayName: name,
      photoURL: photo,
    });

    toast.success("Registration successful!");
    navigate("/"); // Go home immediately
  } catch (error) {
    toast.error(error.message);
  } finally {
    setLoading(false);
  }
};

  const handleGoogleSignUp = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Signed up with Google!");
        navigate("/");
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="card bg-white w-full max-w-sm shadow-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full" required />
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
          <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />

          {/* Password input with toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="input input-bordered w-full pr-10 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 z-10"
            >
             {showPassword ? <FontAwesomeIcon icon={faEyeSlash} />:<FontAwesomeIcon icon={faEye} />}
            </button>
          </div>

          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

          <button type="submit" className="btn btn-primary w-full" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGoogleSignUp} className="btn btn-outline w-full flex items-center justify-center" disabled={loading}>
          <FontAwesomeIcon icon={faGoogle} />
          Continue with Google
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
