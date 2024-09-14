import { useState } from "react";
import { uploadService } from "../services/upload.service";

export function ImgUploader({ onUploaded }) {
  const [imgData, setImgData] = useState({
    imgUrl: null,
    height: 400,
    width: 400,
  });
  const [isUploading, setIsUploading] = useState(false);

  async function uploadImg(ev) {
    try {
      setIsUploading(true);
      const { secure_url, height, width } = await uploadService.uploadImg(ev);
      setImgData({ imgUrl: secure_url, width, height });
      onUploaded?.(secure_url);
    } catch (error) {
      console.error("Image upload failed", error);
    } finally {
      setIsUploading(false);
    }
  }

  function getUploadImg() {
    return imgData.imgUrl
      ? "Upload Another?"
      : isUploading
      ? "Uploading..."
      : "Upload Image";
  }

  return (
    <div className="upload-preview">
      {imgData.imgUrl && (
        <img
          src={imgData.imgUrl}
          style={{ maxWidth: "250px", float: "right" }}
          alt="Uploaded preview"
        />
      )}
      <label htmlFor="imgUpload">{getUploadImg()}</label>
      <input
        type="file"
        onChange={uploadImg}
        accept=".jpg, .jpeg, .png"
        id="imgUpload"
      />
    </div>
  );
}
