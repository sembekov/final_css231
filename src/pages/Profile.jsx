import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      {user ? (
        <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Welcome, {user.name}</h2>
          <p className="text-gray-600">Email: {user.email}</p>
          <button
            onClick={logout}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export default Profile;
