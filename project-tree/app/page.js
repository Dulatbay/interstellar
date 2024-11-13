'use client'

import React, {useEffect, useState} from 'react';
import ReactFlow, {Controls} from 'reactflow';
import 'reactflow/dist/style.css';
import './globals.css';
import InfoPanel from './components/InfoPanel';
import FullScreenImage from './components/FullScreenImage';
import ProjectLegend from './components/ProjectLegend';
import {initialNodes, initialEdges} from './data';

export default function ProjectTree() {
    const [selectedNode, setSelectedNode] = useState(null);
    const [fullScreenImage, setFullScreenImage] = useState(null);
    const [legendVisible, setLegendVisible] = useState(false);
    const [comments, setComments] = useState({});

    useEffect(() => {
        console.log("Abiken Madiyar top 1 frontend developer, added link of  Akhan tg channel to this site")
    }, [])

    const onNodeClick = (event, node) => {
        event.stopPropagation();
        setSelectedNode(node);
    };

    const closeInfoPanel = () => {
        setSelectedNode(null);
    };

    const openFullScreenImage = (image) => {
        setFullScreenImage(image);
    };

    const closeFullScreenImage = () => {
        setFullScreenImage(null);
    };

    const toggleLegend = () => {
        setLegendVisible(!legendVisible);
    };

    // Add comment for a specific node
    const addComment = (nodeId, comment) => {
        setComments((prevComments) => ({
            ...prevComments,
            [nodeId]: [...(prevComments[nodeId] || []), comment],
        }));
    };

    return (
        <div className="flex flex-col h-screen">
            {legendVisible && <ProjectLegend />}
            <button
                onClick={toggleLegend}
                className={`text-white p-2 m-4 rounded-lg self-start ${legendVisible ? 'bg-red-800' : 'bg-blue-500'}`}
            >
                {legendVisible ? 'Скрыть категории' : 'Показать категории'}
            </button>
            <div className="flex flex-grow">
                <div style={{ flex: 3, borderRight: '1px solid #ddd' }} onClick={closeInfoPanel}>
                    <ReactFlow
                        nodes={initialNodes}
                        edges={initialEdges}
                        onNodeClick={onNodeClick}
                        defaultEdgeOptions={{ type: 'bezier', style: { strokeWidth: 3, stroke: '#3b82f6' } }}
                        fitView
                        minZoom={0.1}
                    >
                        <Controls />
                    </ReactFlow>
                </div>
                <InfoPanel
                    node={selectedNode}
                    onClose={closeInfoPanel}
                    openFullScreenImage={openFullScreenImage}
                />
            </div>
            {fullScreenImage && <FullScreenImage image={fullScreenImage} onClose={closeFullScreenImage} />}
        </div>
    );
}
