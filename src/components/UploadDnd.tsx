"use client";
import React, { useState } from "react";
import { UploadDropzone } from "@bytescale/upload-widget-react";
import Image from "next/image";
import { useImage } from "@/store/useStore";

function UploadDnd() {
  const [preview, setPreview] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const setImageUrl=useImage((state:any)=>state.setImageUrl)

  const options = {
    apiKey: process.env.NEXT_PUBLIC_BYTESCALE_API_KEY,
    editor: {
      images: {
        crop: false,
      },
    },
    maxFileCount: 1,
  };

  function onUpdate({ uploadedFiles }: any) {
    if (uploadedFiles.length !== 0) {
      const imageUrl = uploadedFiles[0].fileUrl;
      setPreview(imageUrl);
      setImageUrl(imageUrl);
    }
  }

  return preview ? (
    <div className="relative max-w-[500px] max-h-[300px] flex items-center justify-center">
      {loading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-slate-300 animate-pulse"></div>
      )}
      <Image
        className="object-cover rounded-md"
        src={preview}
        onLoad={() => setLoading(false)}
        width={400}
        height={200}
        alt="preview"
      />
      <button
        className="absolute top-4 right-4 z-10 backdrop-blur-md rounded-full"
        onClick={() => {
          setPreview("");
          setLoading(true);
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-blue-500">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  ) : (
    <UploadDropzone
      options={options}
      onUpdate={onUpdate}
      width="400px"
      height="200px"
    />
  );
}

export default UploadDnd;