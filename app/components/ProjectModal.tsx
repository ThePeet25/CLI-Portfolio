import React, { useEffect } from "react";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";

type ModalProps = {
  project: any;
  onClose: () => void;
};

function ProjectModal({ project, onClose }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-6xl h-[90vh] bg-[#1e1e1e] rounded-lg shadow-2xl border border-gray-700 overflow-hidden flex flex-col">
        {/* close button */}
        <button onClick={onClose}>
          <FiX size={24} />
        </button>
      </div>
    </div>
  );
}

export default ProjectModal;
