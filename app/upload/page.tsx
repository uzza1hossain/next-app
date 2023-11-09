'use client';
import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';
const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="ih2wlf8w">
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
