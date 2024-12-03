import React from "react";
import RegistrationForm from "../components/RegistrationForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-6 bg-white shadow-md rounded-md">
        <h1 className="text-xl font-bold mb-4">Art Competition Registration</h1>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Home;
