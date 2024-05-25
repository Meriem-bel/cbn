import React from 'react';
import Doctor_Image from '../components/PichomeP';

const MedicalHomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      <header className="w-full flex justify-between items-center px-10 py-5 bg-gray-50 shadow-md">
        <div className="text-2xl font-bold text-blue-600">MED</div>
        <nav className="flex space-x-8 ">
          <a href="#" className="text-gray-600 hover:text-gray-800">About Us</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Timetable</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-facebook"></i></a>
        </div>
      </header>
      <main className="flex items-center justify-center min-h-screen w-full px-5">
        <div className="flex justify-between items-center w-full max-w-screen-lg">
          <div className="text-left w-1/2 px-4">
            <h1 className="text-8xl font-bold text-black">
              Comprehensive <span className="text-blue-600">Health Care</span> and <br />
              <span className="text-blue-600">Treatment Plan</span>
            </h1>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg">
              Schedule a Turn
            </button>
          </div>
          <div className="w-1/2 h-full px-1">
          <Doctor_Image/>{}
          </div>
        </div>
      </main>



      <footer className="mt-auto py-5">
        <div className="text-blue-600 text-2xl">↓</div>
      </footer>
    </div>
  );
};

export default MedicalHomePage;
