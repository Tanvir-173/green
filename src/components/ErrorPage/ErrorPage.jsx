import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-green-900 px-4">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Oops! Page Not Found</h2>
      <p className="mb-6 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
