import React from 'react';

const FileUpload = ({ onFileUpload }) => {
  const handleChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    onFileUpload(uploadedFiles);
  };

  return (
    <div className="mb-8">
      <input
        type="file"
        multiple
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FileUpload;
