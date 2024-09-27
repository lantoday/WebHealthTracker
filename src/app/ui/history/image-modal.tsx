"use client";

interface ImageModalProps {
  imageUrl: string | null;
  imageName: string | null;
  onClose: () => void;
}

export function ImageModal({ imageUrl, imageName, onClose }: ImageModalProps) {
  return (
    <>
      {!imageUrl && <p>There is no image to show</p>}

      {imageUrl && (
        <div className="modal show d-block" tabIndex={-1} role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{imageName}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img src={imageUrl} alt="history image" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageModal;
