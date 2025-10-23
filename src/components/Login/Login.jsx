import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";
import { useNavigate, useLocation, Link } from "react-router";
import { auth } from "../../firebase/firebase.init";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();

  // Email/password login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  // Google login
  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Logged in with Google!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  // Forgot password
  const handleForgotPassword = async () => {
    const email = prompt("Enter your registered email:");
    if (!email) {
      toast.error("Please enter an email address.");
      return;
    }

    // Redirect after password reset (change to your deployed site login page)
    const actionCodeSettings = {
      url: import.meta.env.VITE_APP_URL + "/login", 
      handleCodeInApp: false, 
    };

    try {
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      toast.success(
        "Password reset email sent! Check your inbox or spam folder."
      );
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("No account found with that email.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Please enter a valid email address.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="card bg-white w-full max-w-sm shadow-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input input-bordered w-full"
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                className="input input-bordered w-full pr-10 focus:outline-none"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 z-10"
              >
                {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
              </button>
            </div>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Forgot password */}
        <div className="text-center mt-3">
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-sm text-green-700 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <div className="divider">OR</div>

        {/* Google login */}
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full flex items-center justify-center"
          disabled={loading}
        >
          <FontAwesomeIcon icon={faGoogle} />
          Continue with Google
        </button>

        {/* Signup link */}
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-700 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
