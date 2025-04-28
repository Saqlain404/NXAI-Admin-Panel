import React from 'react'

const ImageUpload = ({
  label,
  value,
  onChange,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) => {
    return (
  <div className={`mb-4 ${className}`}>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type="file"
      accept="image/*"
      onChange={onChange}
      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
    />
    {value && (
      <div className="mt-2">
        <img
          src={value}
          alt="Preview"
          className="h-32 object-cover rounded-md"
        />
      </div>
    )}
  </div>
)};

export default ImageUpload;