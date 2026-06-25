"use client";

import Modal from "react-modal";
import { X } from "lucide-react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

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
    width: "100%",
    height: "100%",
    opacity: 1,
    background: "transparent",
  },
};

interface GalleryImage {
  id: number;
  url: string;
  name: string;
  width: number;
  height: number;
}

interface ModalSliderProps {
  isOpen: boolean;
  closeModal: () => void;
  images: GalleryImage[];
}

export default function ModalSlider({
  isOpen,
  closeModal,
  images,
}: ModalSliderProps) {
  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
      <div className="relative">
        <div className="modal-header">
          <button
            onClick={closeModal}
            type="button"
            className="btn-close-modal"
          >
            <X size={60} />
          </button>
        </div>
        <div className="modal-body">
          <AwesomeSlider bullets={false}>
            {images &&
              images.map((item) => (
                <div className="galerry-item grid-item" key={item.id}>
                  <img src={item.url} alt={item.name} />
                </div>
              ))}
          </AwesomeSlider>
        </div>
      </div>
    </Modal>
  );
}
