"use client";

import { useEffect, useRef, useState } from "react";

type GuiBoxProps = {
  id: number;
  title: string;
  type: "introduce" | "project" | "contact" | "certificate" | "help" | "skills";
  onDelete: (id: number) => void;
};

function GuiBox({ id, title, type, onDelete }: GuiBoxProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const boxRef = useRef<HTMLDivElement>(null);

  //scroll to box when created
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  //content based on type
  const renderContent = () => {
    switch (type) {
      case "introduce":
        return (
          <div className="space-y-4 text-gray-300">
            <h2 className="text-2xl font-bold text-white">
              Hello, I'm student 3rd year at KMITL PCC{" "}
            </h2>
            <p>
              I am a Computer Engineering student passionate about
              <span className="text-green-400 font-mono mx-1">
                Backend Systems
              </span>
              and{" "}
              <span className="text-green-400 font-mono mx-1">CLI Tools</span>.
            </p>
          </div>
        );

      case "certificate":
        return (
          <div>
            <p>Helloo</p>
          </div>
        );

      default:
        return <p>No content</p>;
    }
  };
  return (
    <div
      id={`box-${type}`}
      ref={boxRef}
      className="w-full max-2-4xl mx-auto mt-8 transition-all duration-500 ease-in-out"
    >
      {/* outer container */}
      <div className="border border-gray-600 rounded-lg overflow-hidden shadow-xl bg-[#0d1117]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-700">
          <span className="font-mono font-bold text-gray-200">{title}</span>

          {/* icon group*/}
          <div className="flex items-center space-x-3">
            {/* delete button */}
            <button
              onClick={() => onDelete(id)}
              className="text-gray-400 hover:text-red-500 transition-colors"
              title="Close Panel"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>

            {/* collapse expand button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transform transition-transform ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Content Area */}
        {isExpanded && (
          <div className="p-4 bg-[#1e1e1e]">
            <div className="bg-[#2a2e37] rounded p-6 shadow-inner min-h-[200px] border border-gray-700/50">
              {renderContent()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GuiBox;
