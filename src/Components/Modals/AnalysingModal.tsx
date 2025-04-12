


import React from "react";
import logo from "../../assets/Asset 1@4x 1.png";

export interface AnalyzingModalProps {
  isVisible: boolean;
  progress: number;
}

const AnalyzingModal: React.FC<AnalyzingModalProps> = ({ isVisible, progress }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-14 h-14" />
        </div>

        <h2 className="text-lg font-medium text-gray-800 mb-6">
          We’re analysing the content for you
        </h2>

        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8 overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-xs text-gray-500">
          <p className="font-medium">Tips:</p>
          <p>Source: Facebook | Status: Publicly accessible</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyzingModal;

