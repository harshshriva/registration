import React, { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const handleRegisterClick = () => {
    setShowForm(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-6 shadow-md relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Art Competition 2024</h1>
          <button
            onClick={handleRegisterClick}
            className="bg-white text-indigo-600 px-4 py-2 rounded shadow-md hover:bg-gray-100 transition"
          >
            Register Now
          </button>
        </div>
        {showForm && (
          <div>
            <RegistrationForm />
          </div>
        )}
      </header>
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
            Showcase Your Creativity
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Join our annual art competition and win exciting prizes!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <img
              src="https://kdoutsiderart.com/wp-content/uploads/2020/10/painting-911804_1920.jpg"
              alt="Featured Artwork"
              className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
            />
            <img
              src="https://kdoutsiderart.com/wp-content/uploads/2020/10/painting-911804_1920.jpg"
              alt="Featured Artwork"
              className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Competition Details */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Registration Fee</h3>
            <p className="text-gray-600">
              ₹300 per artwork <br />
              ₹150 Early Bird Offer (Limited Period Only)
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Registration Start</h3>
            <p className="text-gray-600">03rd December 2024</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Registration End</h3>
            <p className="text-gray-600">06rd December 2024</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Result Announcement</h3>
            <p className="text-gray-600">08th December 2024</p>
          </div>
        </div>
      </section>

      {/* Important Points */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
            Important Points
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>
              <strong>All types of artworks are accepted:</strong> No specific theme, size, or medium. Both handmade and digital artworks are allowed.
            </li>
            <li>
              <strong>Everyone can participate:</strong> Whether you're a beginner or professional artist, all are welcome!
            </li>
            <li>
              <strong>Winners decided by:</strong> A well-known, professional, and eminent jury panel based on artwork quality.
            </li>
            <li>
              <strong>Result announcement:</strong> 08th December 2024 at 1 PM on Instagram page @mahartcontest and the website <a href="https://mahartcontest.blogspot.com" className="text-indigo-600 underline">mahartcontest.blogspot.com</a>.
            </li>
            <li>
              Every participant will receive a <strong>CERTIFICATE, MEDAL, AND TROPHY</strong> within 72 hours of artwork submission.
            </li>
            <li>
              <strong>Participation:</strong> Submit a minimum of 1 artwork and a maximum of 10 artworks. Each artwork is eligible for a separate prize.
            </li>
            <li>
              A single contestant can win a maximum of 10 prizes for 10 different artworks.
            </li>
          </ul>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Exciting Prizes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">1st Prize</h3>
              <p className="text-4xl font-extrabold text-gray-800">₹10,001</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-gray-600 mb-4">2nd Prize</h3>
              <p className="text-4xl font-extrabold text-gray-800">₹8,001</p>
            </div>
            <div className="bg-red-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-red-600 mb-4">3rd Prize</h3>
              <p className="text-4xl font-extrabold text-gray-800">₹5,001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © 2024 Art Competition. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
