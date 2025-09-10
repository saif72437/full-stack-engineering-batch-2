import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Alert from "../components/Alert";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('right');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const toggleAuthMode = () => {
    setDirection(isLogin ? 'left' : 'right');
    setIsTransitioning(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsTransitioning(false);
    }, 150); // Half of the transition duration
  };

  const handleFormSuccess = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <Alert
        message={alertMessage}
        type="success"
        show={showAlert}
        onClose={handleAlertClose}
        duration={3000}
      />
      <div className="w-full flex flex-col items-center justify-center">
        {/* Toggle Buttons */}
        <div className="mb-8">
          <div className="flex bg-white/60 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/20">
            <button
              onClick={() => {
                if (!isLogin) {
                  setDirection('right');
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setIsLogin(true);
                    setIsTransitioning(false);
                  }, 150);
                }
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isLogin
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/40"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                if (isLogin) {
                  setDirection('left');
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setIsLogin(false);
                    setIsTransitioning(false);
                  }, 150);
                }
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                !isLogin
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/40"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-md relative overflow-hidden">
          <div
            className={`transition-all duration-300 ease-in-out ${
              isTransitioning
                ? `opacity-0 transform ${
                    direction === 'right' 
                      ? 'translate-x-8 scale-95' 
                      : '-translate-x-8 scale-95'
                  }`
                : "opacity-100 transform translate-x-0 scale-100"
            }`}
          >
            {isLogin ? (
              <Login onToggle={toggleAuthMode} onSuccess={handleFormSuccess} />
            ) : (
              <Signup onToggle={toggleAuthMode} onSuccess={handleFormSuccess} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
