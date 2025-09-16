import React, { useRef, useState } from 'react';

interface FileInputProps {
  label?: string;
  onChange: (file: File | null) => void;
  preview?: string | null;
  error?: string | null;
  setError?: (msg: string) => void;
  clearError?: () => void;
}

export default function FileInput({ label, onChange, preview, error, setError, clearError }: FileInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const validateFile = (file: File | null) => {
    if (!file) return null;

    const validTypes = ['image/jpeg', 'image/png'];
    const maxSize = 500 * 1024; // 500 KB

    if (!validTypes.includes(file.type)) {
      if (setError) setError('Wrong file format. Please upload a JPG or PNG file.');
      return null;
    }

    if (file.size > maxSize) {
      if (setError) setError('File too large. Please upload a photo under 500KB.');
      return null;
    }

    if (clearError) clearError();
    return file;
  };

  const handleFile = (file: File | null) => {
    if (!file) {
      return onChange(null);
    } else {
      const validatedFile = validateFile(file);
      if (validatedFile) onChange(validatedFile);
      if (!validatedFile && fileInputRef.current) {
        fileInputRef.current.value = ''; // reset input if invalid
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    handleFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0] ?? null;
    handleFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = () => {
    handleFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // clear input field
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium text-natural-0">{label}</label>}

      <div
        onClick={!preview ? handleClick : undefined}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-4 transition-colors
          ${isDragging ? 'border-orange-500 bg-natural-500' : 'border-natural-500 bg-natural-500-trans'}
          ${preview ? '' : 'cursor-pointer hover:underline'}
        `}
      >
        {!preview && (
          <>
            <img
              src="/images/icon-upload.svg"
              alt="Upload"
              className="w-12 h-12 mb-4 bg-natural-500-trans rounded-xl p-2 border border-natural-500"
            />
            <p className={`${isDragging ? 'text-natural-0' : 'text-natural-300'} text-center `}>
              Drag and drop or click to upload
            </p>
          </>
        )}
        {preview && (
          <>
            <img
              src={preview}
              alt="Preview"
              className="w-12 h-12 mb-4 bg-natural-500-trans rounded-xl border border-natural-500 object-cover"
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleRemove}
                className="px-3 py-1 text-[12px] rounded-lg bg-natural-500-trans text-natural-300 hover:underline hover:cursor-pointer"
              >
                Remove image
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="px-3 py-1 text-[12px] rounded-lg bg-natural-500-trans text-natural-300 hover:underline  hover:cursor-pointer"
              >
                Change image
              </button>
            </div>
          </>
        )}
        <input type="file" accept="image/*" ref={fileInputRef} onChange={handleChange} className="hidden" />
      </div>

      <div className={`flex items-center gap-2 text-xs ${error ? 'text-orange-500' : 'text-natural-300'}`}>
        <span className="flex items-center justify-center w-4 h-4 rounded-full border border-natural-300 text-[10px]">
          i
        </span>
        {!error && <span>Upload your photo (JPG or PNG, max size: 500KB)</span>}
        {error && <span>{error}</span>}
      </div>
    </div>
  );
}
