import React from 'react';

export default function Card({ project }: { project: any }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          {/* Category Bubble: #475569 with white text */}
          <span className="text-xs font-semibold tracking-wider bg-[#475569] text-white px-3 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-xs font-mono text-gray-400">#{project.id}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
      </div>

      {/* Bottom portion: #FAFAF9 with left-aligned difficulty level */}
      <div className="bg-[#FAFAF9] px-6 py-3 border-t border-gray-100 text-left text-sm font-medium text-gray-700">
        {project.difficulty}
      </div>
    </div>
  );
}