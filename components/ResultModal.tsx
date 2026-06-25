"use client";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    borderRadius: 0,
    width: "400px",
  },
};

interface ResultModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function ResultModal({ isOpen, closeModal }: ResultModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div className="modal-body py-4">
        <p className="text-3xl text-[#4e807c] font-medium text-center">
          Send Message Success!
        </p>
        <img
          src="/images/success.png"
          alt="success"
          className="w-36 mx-auto py-10"
        />
        <div className="text-center">
          <button
            onClick={closeModal}
            type="submit"
            className="bg-[#4e807c] focus:outline-none text-white py-2 px-4"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
