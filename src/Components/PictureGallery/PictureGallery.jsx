import React, { useEffect, useState } from "react";

function PictureGallery({ images }) {
  const [pic, setPic] = useState("");

  useEffect(() => {
    if (images?.length) {
      setPic(images[0]);
    }
  }, [images]);

  return (
    <div className="w-full max-w-sm mt-2">
      <div className="bg-white border rounded-lg p-4 mb-3 flex justify-center items-center">
        <img src={pic} alt="pic" className="w-full h-50 object-contain" />
      </div>

      <div className="flex gap-2 ">
        {images?.map((url, index) => (
          <div
            key={index}
            onClick={() => setPic(url)}
            className="bg-white border rounded-md p-1 cursor-pointer flex justify-center items-center"
          >
            <img src={url} alt="thumb" className="w-16 h-16 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PictureGallery;