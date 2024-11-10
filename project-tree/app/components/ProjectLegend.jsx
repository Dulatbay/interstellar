'use client'


import React from 'react';

const ProjectLegend = () => (
    <div className="p-4 bg-[#282828] text-white transition-transform transform-gpu duration-300 ease-in-out">
        <ul className="flex gap-5 mt-2 flex-wrap">
            <li className="flex items-center">
                <span className="w-4 h-4 bg-[#FFD700FF] rounded-full mr-2"></span>
                Переломные проекты
            </li>
            <li className="flex items-center">
                <span className="w-4 h-4 bg-purple-600 rounded-full mr-2"></span>
                Дипломные, хакатон проекты
            </li>
            <li className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                Пет-проекты
            </li>
            <li className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                Коммерческие
            </li>
        </ul>
    </div>
);

export default ProjectLegend;
