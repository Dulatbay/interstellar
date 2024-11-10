'use client'

import React from 'react';
import Image from 'next/image';

const InfoPanel = ({ node, onClose, openFullScreenImage }) => {
    if (!node) return null;

    return (
        <div className="fixed md:absolute top-0 right-0 h-full md:w-[400px] w-full p-5 bg-gray-50 info-panel open">
            <button onClick={onClose} className="absolute top-2 right-2 text-lg text-gray-500 hover:text-gray-700">
                &times;
            </button>
            <h2 className="text-xl font-semibold">Информация о проекте</h2>
            <h3 className="text-lg font-medium mb-2">{node.data.label}</h3>
            <p className="mb-4 text-neutral-300">{node.data.description}</p>
            <ul className="list-disc mb-4">
                <h4 className="text-neutral-300">Tools</h4>
                {node.data.tools.map((tool, index) => (
                    <li className="ml-4 text-neutral-400" key={tool + index}>{tool}</li>
                ))}
            </ul>
            <ul className="text-neutral-300 flex flex-wrap gap-2 flex-col">
                <h4>Images</h4>
                {node.data.images && node.data.images.length !== 0 ? (
                    node.data.images.map((image, index) => (
                        <li key={index} className="border border-gray-600 text-neutral-400 rounded-xl overflow-hidden hover:border-white transition-all">
                            <Image
                                width={400}
                                height={400}
                                src={'/' + node.data.label + image}
                                alt=""
                                onClick={() => openFullScreenImage('/' + node.data.label + image)}
                                className="cursor-pointer"
                            />
                        </li>
                    ))
                ) : (
                    <li><p className="text-neutral-400">Не нашел :(</p></li>
                )}
            </ul>
        </div>
    );
};

export default InfoPanel;
