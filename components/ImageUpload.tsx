import React, { useState, useEffect, useRef } from 'react';

interface ImageUploadProps {
  storageKey: string;
  placeholderText: string;
  recommendedSize: string;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ storageKey, placeholderText, recommendedSize, className }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem(storageKey);
    if (savedImage) {
      setImageSrc(savedImage);
    }
  }, [storageKey]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        localStorage.setItem(storageKey, base64String);
        setImageSrc(base64String);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file.');
    }
  };

  const handleResetImage = () => {
    localStorage.removeItem(storageKey);
    setImageSrc(null);
  };

  return (
    <div className={`relative group bg-slate-200 rounded-lg overflow-hidden ${className}`}>
      {imageSrc ? (
        <img src={imageSrc} alt={placeholderText} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
          <p className="text-muted text-sm">{`/* ${placeholderText} */`}</p>
          <p className="text-muted text-xs mt-2 font-mono">Recommended: {recommendedSize}</p>
        </div>
      )}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={handleUploadClick} className="text-white text-xs bg-black/70 px-2 py-1 rounded hover:bg-black">Change</button>
        {imageSrc && <button onClick={handleResetImage} className="text-white text-xs bg-black/70 px-2 py-1 rounded hover:bg-black">Reset</button>}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/gif"
      />
    </div>
  );
};

export default ImageUpload;
