"use client";
import React, { useState, useEffect } from "react";
import { HistoryEntry } from "@/app/lib/utils/definitions";
import ImageModal from "./image-modal";

interface HistoryItemProps {
  data: HistoryEntry | null;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) {
      setSelectedImage(null);
    }
  }, [isModalOpen]);

  return (
    <li className="timeline-item mb-5">
      <h5 className="fw-bold">{data?.title}</h5>
      <p className="text-muted mb-2 fw-bold">{data?.date}</p>
      <p className="text-muted">{data?.details}</p>
      <div>
        {data?.files.map((base64Image, index) => (
          <img
            key={index}
            src={`data:image/jpeg;base64,${base64Image}`}
            alt={`Thumbnail ${index}`}
            className="thumbnail"
            onClick={() =>
              handleImageClick(`data:image/jpeg;base64,${base64Image}`)
            }
            style={{
              cursor: "pointer",
              width: "100px",
              height: "auto",
              marginRight: "10px",
            }}
          />
        ))}
      </div>

      {isModalOpen && (
        <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />
      )}
    </li>
  );
};

export default HistoryItem;
