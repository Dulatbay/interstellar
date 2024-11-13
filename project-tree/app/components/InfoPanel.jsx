'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const InfoPanel = ({ node, onClose, openFullScreenImage }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        if (node) {
            fetch(`/api/comments?nodeId=${node.id}`)
                .then((response) => response.json())
                .then((data) => setComments(data.comments || []))
                .catch((error) => console.error('Ошибка при загрузке комментариев:', error));
        }
    }, [node]);

    const addComment = async () => {
        if (!newComment.trim()) return;

        try {
            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodeId: node.id, comment: newComment }),
            });

            const data = await response.json();
            if (response.ok) {
                setComments([...comments, data.comment]);
                setNewComment('');
            } else {
                console.error('Ошибка при добавлении комментария:', data.error);
            }
        } catch (error) {
            console.error('Ошибка при добавлении комментария:', error);
        }
    };

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
                <h4 className="text-neutral-300">Инструменты</h4>
                {node.data.tools.map((tool, index) => (
                    <li className="ml-4 text-neutral-400" key={tool + index}>{tool}</li>
                ))}
            </ul>
            <ul className="text-neutral-300 flex flex-wrap gap-2 flex-col">
                <h4>Изображения</h4>
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

            <div className="mt-6">
                <h4 className="text-lg font-medium mb-2">Комментарии</h4>
                <ul className="mb-4 h-full">
                    {comments.map((comment, index) => (
                        <li key={index} className="p-2 border border-gray-500 mb-2 rounded-l text-white">
                            {comment.text}
                        </li>
                    ))}
                </ul>

                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Добавьте комментарий..."
                        className="flex-grow border border-gray-300 rounded-md px-2 py-1 text-gray-700"
                    />
                    <button
                        onClick={addComment}
                        className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition"
                    >
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoPanel;
