'use client'

import React from 'react';
import Image from 'next/image';

const FullScreenImage = ({ image, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={onClose}>
        <Image src={image} alt="Fullscreen" width={800} height={800} className="object-contain max-h-full max-w-full" />
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">&times;</button>
    </div>
);

export default FullScreenImage;
