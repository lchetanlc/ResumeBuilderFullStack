import React, { useState } from "react";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <img
        src={selectedImage || "placeholder.png"}
        alt=".....Select Image"
        onClick={handleImageClick}
        style={{ width: "200px", height: "200px", objectFit: "cover", cursor: "pointer",borderRadius:"50%" }}
      />
    </div>
  );
}

export default ImageUpload;
