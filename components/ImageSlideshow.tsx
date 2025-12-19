import React, { useState, useEffect, useRef } from 'react';

const NUM_SLIDES = 4;
const SLIDE_DURATION = 5000; // 5 seconds

const ImageSlideshow: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageSrcs, setImageSrcs] = useState<(string | null)[]>(Array(NUM_SLIDES).fill(null));
    const fileInputRef = useRef<HTMLInputElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Load images from localStorage on mount
    useEffect(() => {
        try {
            const loadedImages = Array.from({ length: NUM_SLIDES }, (_, i) => {
                return localStorage.getItem(`slideshow-image-${i}`);
            });
            setImageSrcs(loadedImages);
        } catch (error) {
            console.error("Could not access localStorage:", error);
        }
    }, []);

    // Autoplay logic
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setCurrentIndex((prevIndex) => (prevIndex + 1) % NUM_SLIDES),
            SLIDE_DURATION
        );
        return () => {
            resetTimeout();
        };
    }, [currentIndex]);

    // Navigation functions
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? NUM_SLIDES - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === NUM_SLIDES - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    // Upload/Reset functions for the CURRENT slide
    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                const storageKey = `slideshow-image-${currentIndex}`;
                try {
                    localStorage.setItem(storageKey, base64String);
                    const newImageSrcs = [...imageSrcs];
                    newImageSrcs[currentIndex] = base64String;
                    setImageSrcs(newImageSrcs);
                } catch (error) {
                    console.error("Could not save to localStorage:", error);
                    alert("Could not save image. Your browser's storage might be full.");
                }
            };
            reader.readAsDataURL(file);
        } else if(file) {
            alert('Please select a valid image file.');
        }
    };

    const handleResetImage = () => {
        const storageKey = `slideshow-image-${currentIndex}`;
        try {
            localStorage.removeItem(storageKey);
            const newImageSrcs = [...imageSrcs];
            newImageSrcs[currentIndex] = null;
            setImageSrcs(newImageSrcs);
        } catch (error) {
            console.error("Could not remove from localStorage:", error);
        }
    };

    const currentImageSrc = imageSrcs[currentIndex];

    return (
        <div 
            className="relative group aspect-[21/9] max-h-[400px] w-full shadow-lg bg-slate-200 rounded-lg overflow-hidden"
            onMouseEnter={resetTimeout}
            onMouseLeave={() => {
                timeoutRef.current = setTimeout(
                    () => setCurrentIndex((prevIndex) => (prevIndex + 1) % NUM_SLIDES),
                    SLIDE_DURATION
                );
            }}
        >
            {/* Image or Placeholder */}
            {currentImageSrc ? (
                <img src={currentImageSrc} alt={`Slide ${currentIndex + 1}`} className="w-full h-full object-cover transition-all duration-500" />
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
                    <p className="text-muted text-sm">{`/* Slide ${currentIndex + 1}: Abstract representation of interconnected telecom and aviation infrastructure */`}</p>
                    <p className="text-muted text-xs mt-2 font-mono">Recommended: 1280x550px</p>
                </div>
            )}

            {/* Hover Controls */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={handleUploadClick} className="text-white text-xs bg-black/70 px-2 py-1 rounded hover:bg-black">Change</button>
                {currentImageSrc && <button onClick={handleResetImage} className="text-white text-xs bg-black/70 px-2 py-1 rounded hover:bg-black">Reset</button>}
            </div>

            {/* Hidden File Input */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/png, image/jpeg, image/gif"
            />

            {/* Navigation Arrows */}
            <button onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none">
                &#10094;
            </button>
            <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none">
                &#10095;
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {imageSrcs.map((_, slideIndex) => (
                    <button
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            currentIndex === slideIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${slideIndex + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ImageSlideshow;
