"use client";
import React, { useState, useEffect } from "react";
import { HistoryEntry, ImageFile } from "@/app/lib/utils/definitions";
import ImageModal from "./image-modal";

interface HistoryItemProps {
  data: HistoryEntry | null;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ data }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (file: ImageFile) => {
    setImageUrl(file.url);
    setImageName(file.name);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) {
      setImageUrl(null);
      setImageName(null);
    }
  }, [isModalOpen]);

  return (
    <li className="timeline-item mb-5">
      <h5 className="fw-bold">{data?.title}</h5>
      <p className="text-muted mb-2 fw-bold">{data?.date}</p>
      <p className="text-muted">{data?.details}</p>
      <div>
        {data?.files.map((file, index) => (
          <img
            key={index}
            src={file.url}
            alt={`Thumbnail ${index}`}
            className="thumbnail"
            onClick={() => handleImageClick(file)}
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
        <ImageModal
          imageUrl={imageUrl}
          imageName={imageName}
          onClose={handleCloseModal}
        />
      )}
    </li>
  );
};

export default HistoryItem;
